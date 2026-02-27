import { useState, useEffect } from "react";
import tinkerpro from "../assets/projectsimg/tinkerproimg.png";
import jrs from "../assets/projectsimg/jrs.png";
import brightway from "../assets/projectsimg/brightway.png";
import happymeter from "../assets/projectsimg/happymeter.png";
import warehouseINVS from "../assets/projectsimg/warehouseINVS.png";
import apxwifi from "../assets/projectsimg/apxwifi.png";

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
            description: "Tinker Pro is a modern website for a startup offering a smart POS system that helps small businesses manage sales, track inventory, and monitor reports easily through a clean and user-friendly interface.",
            link: "https://tinkerpro.io/ph",
        },
        {
            image: jrs,
            title: "Job Request System",
            description: "A digital platform that streamlines campus maintenance by replacing paper-based processes with an easy-to-use online request and tracking system, improving efficiency and response times.",
            link: "http://ustpjrs.onrender.com/",
        },
        {
            image: brightway,
            title: "Brightway",
            description: "A business website for a startup insurance company designed to attract more clients. It showcases their services clearly and builds trust through a professional and user-friendly design.",
            link: "https://brightway.com.ph",
        },
        {
            image: happymeter,
            title: "HappyMeter",
            description: "A web-based feedback and reporting tool designed to monitor and track employee satisfaction in the workplace, helping organizations gain insights and improve office morale and productivity.",
            link: "https://happy-meter-rating-pabe.vercel.app/",
        },
        {
            image: apxwifi,
            title: "APX WiFi Portal",
            description: "A landing page and login flow for an internet service provider, designed for gym users to access voucher-based WiFi quickly and securely.",
            link: "",
        },
        {
            image: warehouseINVS,
            title: "Warehouse INVS",
            description: "A fast, efficient, and intuitive warehouse inventory system built to streamline stock management. It allows precise tracking of tools, office supplies, and equipment, enhanced with built-in notifications, QR support, and real-time issuance monitoring.",
            link: "https://warehouse-invs.vercel.app/",
        },
    ];

    const handleToggle = () => {
        const nextShowAll = !showAll;

        if (nextShowAll) {
            setShowAll(true);
            const newIndexes = [3, 4, 5];
            setAnimatingIndexes(newIndexes);
            setTimeout(() => setAnimatingIndexes([]), 600);
        } else {
            const exitIndexes = [3, 4, 5];
            setAnimatingIndexes(exitIndexes.map(i => `exit-${i}`));
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
        <div id="projects" className="text-gray-800 p-8 rounded-lg max-w-6xl mx-auto">

            <h3 className="text-center text-3xl font-semibold text-gray-800 pb-10">
                Projects
            </h3>

            <style>{`
                @keyframes fadeSlideIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                @keyframes fadeSlideOut {
                    from {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                }
            `}</style>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {displayedProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={getCardStyle(index)}
                        className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 ${project.disabled ? "pointer-events-none opacity-70" : ""
                            }`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-700 text-sm">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>

            {projects.length > 3 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleToggle}
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        {showAll ? "Show Less" : "Show All Projects"}
                    </button>
                </div>
            )}
        </div>
    );
}