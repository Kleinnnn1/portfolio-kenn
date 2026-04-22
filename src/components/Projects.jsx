import { useState, useEffect } from "react";
import tinkerpro from "../assets/projectsimg/tinkerproimg.png";
import jrs from "../assets/projectsimg/jrs.png";
import brightway from "../assets/projectsimg/brightway.png";
import happymeter from "../assets/projectsimg/happymeter.png";
import warehouseINVS from "../assets/projectsimg/warehouseINVS.png";
import apxwifi from "../assets/projectsimg/apxwifi.png";
import nike from "../assets/projectsimg/nike.png";

export default function ProjectSection() {
    const [showAll, setShowAll] = useState(false);
    const [animatingIndexes, setAnimatingIndexes] = useState([]);
    const [mountedIndexes, setMountedIndexes] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMountedIndexes([0, 1, 2]);
            setTimeout(() => setMountedIndexes([]), 800);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            image: tinkerpro,
            title: "TinkerPro POS",
            description:
                "A modern website for a startup offering a smart POS system that helps small businesses manage sales, track inventory, and monitor reports easily.",
            link: "https://tinkerpro.io/ph",
            tag: "Web App",
        },
        {
            image: jrs,
            title: "Job Request System",
            description:
                "A digital platform that streamlines campus maintenance by replacing paper-based processes with an easy-to-use online request and tracking system.",
            link: "http://ustpjrs.onrender.com/",
            tag: "Platform",
        },
        {
            image: brightway,
            title: "Brightway",
            description:
                "A business website for a startup insurance company designed to attract clients, showcasing services through a professional and user-friendly design.",
            link: "https://brightway.com.ph",
            tag: "Business Site",
        },
        {
            image: happymeter,
            title: "HappyMeter",
            description:
                "A web-based feedback and reporting tool to monitor employee satisfaction, helping organizations gain insights and improve office morale.",
            link: "https://happy-meter-rating-pabe.vercel.app/",
            tag: "Dashboard",
        },
        {
            image: apxwifi,
            title: "APX WiFi Portal",
            description:
                "A landing page and login flow for an internet service provider, designed for gym users to access voucher-based WiFi quickly and securely.",
            link: "",
            tag: "Portal",
            disabled: true,
        },
        {
            image: warehouseINVS,
            title: "Warehouse INVS",
            description:
                "A warehouse inventory system built to streamline stock management with precise tracking, QR support, and real-time issuance monitoring.",
            link: "https://warehouse-invs.vercel.app/",
            tag: "Inventory",
        },
        {
            image: nike,
            title: "Nike Shoe Slider",
            description:
                "An interactive shoe showcase with cinematic slide transitions, layered animations, and a shoe-through-text effect built with React and CSS.",
            link: "https://nike-web-teal.vercel.app/",
            tag: "UI/Animation"
        },
    ];

    const handleToggle = () => {
        const nextShowAll = !showAll;
        if (nextShowAll) {
            setShowAll(true);
            setAnimatingIndexes([3, 4, 5]);
            setTimeout(() => setAnimatingIndexes([]), 600);
        } else {
            setAnimatingIndexes([3, 4, 5].map((i) => `exit-${i}`));
            setTimeout(() => {
                setShowAll(false);
                setAnimatingIndexes([]);
            }, 400);
        }
    };

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    const getCardStyle = (index) => {
        if (mountedIndexes.includes(index)) {
            return {
                animation: `fadeSlideIn 0.5s ease forwards`,
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
            };
        }
        if (animatingIndexes.includes(index)) {
            return {
                animation: `fadeSlideIn 0.5s ease forwards`,
                animationDelay: `${(index - 3) * 0.1}s`,
                opacity: 0,
            };
        }
        if (animatingIndexes.includes(`exit-${index}`)) {
            return {
                animation: `fadeSlideOut 0.35s ease forwards`,
                animationDelay: `${(5 - index) * 0.07}s`,
            };
        }
        return {};
    };

    return (
        <section
            id="projects"
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
        @keyframes fadeSlideOut {
          from { opacity: 1; transform: translateY(0)   scale(1);    }
          to   { opacity: 0; transform: translateY(30px) scale(0.97); }
        }
        .project-card:hover .project-arrow { opacity: 1; transform: translateX(0); }
        .project-card:hover .project-img   { transform: scale(1.05); }
        .project-card:hover {
          border-color: rgba(100,120,160,0.45) !important;
          box-shadow: 0 0 0 1px rgba(100,120,160,0.2), 0 20px 40px rgba(0,0,0,0.5) !important;
        }
      `}</style>

            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-10">
                    <div
                        className="h-px flex-1"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }}
                    />
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">
                        Projects
                    </h2>
                    <div
                        className="h-px flex-1"
                        style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }}
                    />
                </div>

                {/* Grid */}
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {displayedProjects.map((project, index) => (
                        <a
                            key={index}
                            href={project.disabled ? undefined : project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                ...getCardStyle(index),
                                background: "rgba(10,10,10,0.65)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(100,120,160,0.2)",
                                borderRadius: "6px",
                                overflow: "hidden",
                                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                                pointerEvents: project.disabled ? "none" : "auto",
                                opacity: project.disabled
                                    ? (getCardStyle(index).opacity ?? 0.5)
                                    : (getCardStyle(index).opacity ?? 1),
                                textDecoration: "none",
                            }}
                            className="project-card block"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden" style={{ height: "180px" }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img w-full h-full object-cover"
                                    style={{ transition: "transform 0.5s ease" }}
                                />
                                {/* Dark gradient fade into card body */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)",
                                    }}
                                />
                                {/* Tag badge */}
                                <span
                                    className="absolute top-3 left-3 text-xs tracking-widest uppercase px-2 py-1 font-medium"
                                    style={{
                                        background: "rgba(10,10,10,0.75)",
                                        border: "1px solid rgba(100,120,160,0.3)",
                                        borderRadius: "3px",
                                        color: "rgba(160,180,220,0.9)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                >
                                    {project.tag}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-white font-semibold text-lg leading-snug">
                                        {project.title}
                                    </h3>
                                    {/* Arrow icon — appears on hover */}
                                    <span
                                        className="project-arrow text-gray-400 mt-1 shrink-0"
                                        style={{
                                            opacity: 0,
                                            transform: "translateX(-6px)",
                                            transition: "opacity 0.3s ease, transform 0.3s ease",
                                            fontSize: "18px",
                                        }}
                                    >
                                        ↗
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                {project.disabled && (
                                    <span className="inline-block mt-3 text-xs tracking-widest uppercase text-gray-600">
                                        Private Project
                                    </span>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Toggle button */}
                {projects.length > 3 && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={handleToggle}
                            className="px-8 py-3 text-sm tracking-widest uppercase font-medium text-white transition-all duration-200"
                            style={{
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "4px",
                                background: "rgba(255,255,255,0.04)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                            }}
                        >
                            {showAll ? "Show Less" : "View All Projects"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}