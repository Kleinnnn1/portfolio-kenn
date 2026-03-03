import { useState, useCallback, useRef, useEffect } from "react";

const COLORS = [
    "#e05a7a", "#7a5ae0", "#5a7ae0", "#5ae07a",
    "#e07a5a", "#5ae0d4", "#d45ae0", "#7ae05a",
];

const CELL_SIZE = 40;
const FADE_DURATION = 1800;

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function getGrid() {
    return {
        cols: Math.ceil(window.innerWidth / CELL_SIZE) + 1,
        rows: Math.ceil(window.innerHeight / CELL_SIZE) + 1,
    };
}

export default function PixelGrid() {
    const [grid, setGrid] = useState(getGrid);
    const [pixels, setPixels] = useState({});
    const timersRef = useRef({});
    const lastKeyRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setGrid(getGrid());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activatePixel = useCallback((key) => {
        if (lastKeyRef.current === key) return;
        lastKeyRef.current = key;
        const color = getRandomColor();
        if (timersRef.current[key]) clearTimeout(timersRef.current[key]);
        setPixels((prev) => ({ ...prev, [key]: { color, fading: false } }));

        const fadeStart = setTimeout(() => {
            setPixels((prev) => ({ ...prev, [key]: { ...prev[key], fading: true } }));
            const remove = setTimeout(() => {
                setPixels((prev) => { const next = { ...prev }; delete next[key]; return next; });
                delete timersRef.current[key];
            }, FADE_DURATION);
            timersRef.current[key] = remove;
        }, 300);

        timersRef.current[key] = fadeStart;
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const col = Math.floor(e.clientX / CELL_SIZE);
            const row = Math.floor(e.clientY / CELL_SIZE);
            activatePixel(`${row}-${col}`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [activatePixel]);

    useEffect(() => {
        const timers = timersRef.current;
        return () => Object.values(timers).forEach(clearTimeout);
    }, []);

    const { cols, rows } = grid;

    const cells = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const key = `${r}-${c}`;
            const pixel = pixels[key];
            cells.push(
                <div key={key} style={{
                    backgroundColor: pixel ? pixel.color : "transparent",
                    opacity: pixel ? (pixel.fading ? 0 : 1) : 1,
                    transition: pixel?.fading
                        ? `opacity ${FADE_DURATION}ms ease-out`
                        : "opacity 0.1s ease-in",
                }} />
            );
        }
    }

    return (
        <div style={{
            position: "fixed", inset: 0,
            width: "100vw", height: "100vh",
            background: "#0a0a0a", zIndex: 0,
            pointerEvents: "none", overflow: "hidden",
        }}>
            {/* Grid lines */}
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `
                    linear-gradient(rgba(100,120,160,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(100,120,160,0.15) 1px, transparent 1px)
                `,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                pointerEvents: "none", zIndex: 1,
            }} />

            {/* ✅ CSS grid with explicit CELL_SIZE — mouse math matches visual grid exactly */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 0,
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, ${CELL_SIZE}px)`,
                gridTemplateRows: `repeat(${rows}, ${CELL_SIZE}px)`,
            }}>
                {cells}
            </div>
        </div>
    );
}