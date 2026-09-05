import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "@vnedyalk0v/react19-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// ISO alpha-2 -> [longitude, latitude], approximate country centers
const COUNTRY_COORDS = {
    US: [-95.7, 37.1], PH: [121.8, 12.9], IN: [78.9, 20.6], GB: [-3.4, 55.4],
    DE: [10.4, 51.2], FR: [2.2, 46.2], AU: [133.8, -25.3], CA: [-106.3, 56.1],
    BR: [-51.9, -14.2], JP: [138.3, 36.2], SG: [103.8, 1.35], NZ: [174.9, -40.9],
    ZA: [22.9, -30.6], NG: [8.7, 9.1], KE: [37.9, -0.02], AE: [53.8, 23.4],
    ES: [-3.7, 40.5], IT: [12.6, 42.5], NL: [5.3, 52.1], SE: [18.6, 60.1],
    MX: [-102.6, 23.6], AR: [-63.6, -38.4], ID: [113.9, -0.8], TH: [100.9, 15.9],
    VN: [108.3, 14.1], MY: [101.9, 4.2], PK: [69.3, 30.4], KR: [127.8, 36.5],
    CN: [104.2, 35.9], RU: [105.3, 61.5], PL: [19.1, 51.9], TR: [35.2, 39.0],
};

export default function VisitorsSection() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/visitors")
            .then((r) => r.json())
            .then(setData)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section
            id="visitors"
            className="py-16 px-6"
            style={{
                borderTop: "1px solid rgba(100,120,160,0.12)",
                borderBottom: "1px solid rgba(100,120,160,0.12)",
            }}
        >
            <div className="max-w-5xl mx-auto text-center">
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }} />
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">A Global Stage</h2>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }} />
                </div>

                {loading ? (
                    <p className="text-gray-500 text-sm">Loading visitor data...</p>
                ) : data && data.totalUsers > 0 ? (
                    <>
                        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                            Over <span className="text-white font-semibold">{data.totalUsers}+</span> visitors across{" "}
                            <span className="text-white font-semibold">{data.countryCount}</span> countries have checked out this portfolio.
                        </p>
                        <div style={{ borderRadius: "6px", overflow: "hidden", border: "1px solid rgba(100,120,160,0.2)" }}>
                            <ComposableMap projectionConfig={{ scale: 140 }} style={{ width: "100%", height: "auto" }}>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#1e2433"
                                                stroke="#0a0a0a"
                                                style={{ default: { outline: "none" }, hover: { outline: "none" }, pressed: { outline: "none" } }}
                                            />
                                        ))
                                    }
                                </Geographies>
                                {data.countries.map(({ code, users }) => {
                                    const coords = COUNTRY_COORDS[code];
                                    if (!coords) return null;
                                    const r = Math.min(3 + Math.log(users + 1) * 1.5, 12);
                                    return (
                                        <Marker key={code} coordinates={coords}>
                                            <circle r={r} fill="#38bdf8" fillOpacity={0.85} stroke="#0a0a0a" strokeWidth={1} />
                                        </Marker>
                                    );
                                })}
                            </ComposableMap>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-sm">No visitor data yet — check back once traffic comes in.</p>
                )}
            </div>
        </section>
    );
}