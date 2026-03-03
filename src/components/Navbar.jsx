import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const isClickScrolling = useRef(false); // prevents observer overriding click nav

    const NAV_ITEMS = ["home", "skills", "projects", "experience", "contact"];

    // Track scroll for floating pill visibility
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ IntersectionObserver — auto-highlights active section while scrolling
    useEffect(() => {
        const observers = [];

        NAV_ITEMS.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !isClickScrolling.current) {
                        setActive(id);
                    }
                },
                {
                    rootMargin: "-30% 0px -60% 0px", // activates when section hits middle of viewport
                    threshold: 0,
                }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        // Lock observer briefly so click-nav doesn't get overridden mid-scroll
        isClickScrolling.current = true;
        setActive(id);
        setIsOpen(false);

        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }

        setTimeout(() => { isClickScrolling.current = false; }, 800);
    };

    const desktopLinkClass = (id) =>
        `cursor-pointer px-4 py-1.5 rounded transition-all duration-200 text-sm tracking-widest uppercase font-medium ${active === id
            ? "text-white border border-white/30 bg-white/10"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`;

    const mobileLinkClass = (id) =>
        `cursor-pointer block px-4 py-2 rounded transition-all duration-200 tracking-widest uppercase text-sm font-medium ${active === id
            ? "text-white bg-white/10 border border-white/20"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`;

    return (
        <>
            {/* Floating Pill Navbar */}
            <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}>
                <ul className="hidden md:flex items-center gap-1 rounded-full px-6 py-2 border border-white/10"
                    style={{
                        background: "rgba(10,10,10,0.75)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.6)",
                    }}>
                    {NAV_ITEMS.map((id) => (
                        <li key={id} onClick={() => scrollTo(id)} className={desktopLinkClass(id)}>{id}</li>
                    ))}
                </ul>
            </div>

            {/* Top Navbar */}
            <nav className={`transition-all duration-300 ${scrolled && !isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                style={{
                    borderBottom: "1px solid rgba(100,120,160,0.15)",
                    background: "rgba(10,10,10,0.4)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                }}>
                <div className="flex justify-start md:justify-center items-center py-4 px-6">
                    <ul className="hidden md:flex gap-2 text-base">
                        {NAV_ITEMS.map((id) => (
                            <li key={id} onClick={() => scrollTo(id)} className={desktopLinkClass(id)}>{id}</li>
                        ))}
                    </ul>
                    <button className="md:hidden text-gray-300 hover:text-white transition text-2xl" onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40"
                    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                    onClick={() => setIsOpen(false)} />
            )}

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{
                    background: "rgba(10,10,10,0.92)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderRight: "1px solid rgba(100,120,160,0.15)",
                }}>
                <div className="p-6 space-y-6">
                    <button className="text-gray-400 hover:text-white transition text-xl" onClick={() => setIsOpen(false)}>✕</button>
                    <div className="w-full h-px" style={{ background: "linear-gradient(90deg, rgba(90,122,224,0.5), transparent)" }} />
                    <ul className="space-y-2">
                        {NAV_ITEMS.map((id) => (
                            <li key={id} onClick={() => scrollTo(id)} className={mobileLinkClass(id)}>{id}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}