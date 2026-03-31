import { useState, useEffect } from "react";
import tinkerpro from "../assets/tinkerpro logo.png";
import brightway from "../assets/brightwaylogo.jpg";

export default function ExperienceSection() {
    const [mountedIndexes, setMountedIndexes] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountedIndexes([0, 1]);
            setTimeout(() => setMountedIndexes([]), 800);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const experiences = [
        {
            logo: tinkerpro,
            objectFit: "object-contain",
            logoBg: "#f97316",
            role: "Full Stack Web Developer",
            company: "TinkerPro Technologies",
            period: "August 2025 – January 2026",
            location: "Lapu-Lapu City, Philippines",
            tag: "Full-Time",
            description: [
                "Developed frontend interfaces using React (TypeScript) and implemented backend functionality in Laravel, including authentication and role-based access control for a multi-branch POS system.",
                "Integrated RESTful APIs, participated in testing and debugging, and ensured the system met performance and functionality requirements.",
                "Containerized the application using Docker to streamline development and maintain consistent deployment environments.",
            ],
        },
        {
            logo: brightway,
            objectFit: "object-cover",
            logoBg: "#1e3a5f",
            role: "IT Support & WordPress Developer",
            company: "BrightWayPH",
            period: "January 2025 – June 2025",
            location: "Cagayan De Oro City, Philippines",
            tag: "Part-Time",
            description: [
                "Configured and customized a WordPress template, applying CSS to create a visually appealing and functional company website.",
                "Maintained the website with regular updates to ensure security and optimal performance.",
                "Provided technical support for hardware, software, and basic networking issues, ensuring smooth daily operations and increased applicant engagement.",
            ],
        },
    ];

    const getCardStyle = (index) => {
        if (mountedIndexes.includes(index)) {
            return {
                animation: `fadeSlideIn 0.5s ease forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
            };
        }
        return {};
    };

    return (
        <section
            id="experience"
            className="py-16 px-6"
            style={{
                borderTop: "1px solid rgba(100,120,160,0.12)",
                borderBottom: "1px solid rgba(100,120,160,0.12)",
            }}
        >
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
        .exp-card:hover {
          border-color: rgba(100,120,160,0.45) !important;
          box-shadow: 0 0 0 1px rgba(100,120,160,0.15), 0 20px 40px rgba(0,0,0,0.5) !important;
        }
        @keyframes shimmerLine {
          0%   { top: -40%; opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

            <div className="max-w-4xl mx-auto">

                {/* Section header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }} />
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">Experience</h2>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }} />
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vibrant vertical line between dots */}
                    <div
                        className="absolute hidden sm:block"
                        style={{
                            left: "25px",
                            top: "28px",
                            bottom: "28px",
                            width: "2px",
                            background: "linear-gradient(to bottom, #7a5ae0, #5a7ae0, #5ae0d4, #5ae07a)",
                            boxShadow: "0 0 8px rgba(90,122,224,0.6), 0 0 20px rgba(90,122,224,0.3)",
                            borderRadius: "2px",
                        }}
                    >
                        {/* Shimmer traveling down */}
                        <div
                            style={{
                                position: "absolute",
                                left: "-2px",
                                right: "-2px",
                                height: "40%",
                                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.45), transparent)",
                                animation: "shimmerLine 2.5s ease-in-out infinite",
                                borderRadius: "2px",
                            }}
                        />
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                style={getCardStyle(index)}
                                className="exp-card relative sm:pl-20 transition-all duration-300"
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center"
                                    style={{
                                        borderColor: "rgba(100,120,160,0.6)",
                                        background: "#0a0a0a",
                                        zIndex: 1,
                                    }}
                                >
                                    <div className="w-2 h-2 rounded-full" style={{ background: "rgba(100,120,160,0.8)" }} />
                                </div>

                                {/* Card */}
                                <div
                                    className="rounded-md overflow-hidden"
                                    style={{
                                        background: "rgba(10,10,10,0.65)",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        border: "1px solid rgba(100,120,160,0.2)",
                                        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                                    }}
                                >
                                    {/* Card top bar */}
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4"
                                        style={{ borderBottom: "1px solid rgba(100,120,160,0.12)" }}
                                    >
                                        <div className="flex items-center gap-4">
                                            {/* Company logo */}
                                            <div
                                                className="w-12 h-12 rounded shrink-0 overflow-hidden"
                                                style={{ background: exp.logoBg, border: "1px solid rgba(255,255,255,0.08)" }}
                                            >
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className={`w-full h-full ${exp.objectFit}`}
                                                />
                                            </div>

                                            <div>
                                                <h3 className="text-white font-semibold text-lg leading-tight">{exp.role}</h3>
                                                <p className="text-gray-400 text-sm mt-0.5">{exp.company}</p>
                                            </div>
                                        </div>

                                        {/* Period + tag */}
                                        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                                            <span
                                                className="text-xs tracking-widest uppercase px-2 py-1 font-medium"
                                                style={{
                                                    background: "rgba(10,10,10,0.75)",
                                                    border: "1px solid rgba(100,120,160,0.3)",
                                                    borderRadius: "3px",
                                                    color: "rgba(160,180,220,0.9)",
                                                }}
                                            >
                                                {exp.tag}
                                            </span>
                                            <span className="text-gray-500 text-xs tracking-wide">{exp.period}</span>
                                            <span className="text-gray-600 text-xs">{exp.location}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="px-6 py-5 space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                                                <span
                                                    className="mt-2 w-1 h-1 rounded-full shrink-0"
                                                    style={{ background: "rgba(100,120,160,0.7)" }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}