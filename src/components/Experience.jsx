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
            logoBg: "bg-orange-500",
            role: "Full Stack Web Developer",
            company: "TinkerPro Technologies",
            period: "June 2025 – February 2026 | Lapu-Lapu City, Philippines",
            description: [
                "Developed frontend interfaces using React (TypeScript) and implemented backend functionality in Laravel, including authentication and role-based access control for a multi-branch POS system.",
                "Integrated RESTful APIs, participated in testing and debugging, and ensured the system met performance and functionality requirements.",
                "Containerized the application using Docker to streamline development and maintain consistent deployment environments.",
            ],
        },
        {
            logo: brightway,
            objectFit: "object-cover",
            logoBg: "bg-blue-900",
            role: "IT Support & WordPress Developer",
            company: "BrightWayPH",
            period: "January 2025 – June 2025 | Cagayan De Oro City, Philippines",
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
        <div id="experience" className="text-gray-800 p-4 md:p-8 rounded-lg max-w-4xl mx-auto space-y-6">

            <h3 className="text-center text-3xl font-semibold text-gray-800 pt-4">
                Experience
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
            `}</style>

            {experiences.map((exp, index) => (
                <div
                    key={index}
                    style={getCardStyle(index)}
                    className="flex flex-col sm:flex-row bg-white border border-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                >
                    {/* Logo */}
                    <div className={`w-full h-40 sm:w-44 sm:h-auto shrink-0 ${exp.logoBg}`}>
                        <img
                            src={exp.logo}
                            alt={exp.company}
                            className={`w-full h-full ${exp.objectFit} block`}
                        />
                    </div>

                    {/* Details */}
                    <div className="p-4 flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-gray-700 italic mb-3">
                            {exp.company} | {exp.period}
                        </p>

                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            {exp.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}