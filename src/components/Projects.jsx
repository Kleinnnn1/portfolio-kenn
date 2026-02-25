import { useState } from "react";

// Temporary placeholder image
import placeholder from "../assets/kenn-img.jpg";

export default function ProjectSection() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            image: placeholder,
            title: "TinkerPro POS",
            description: "Modern POS system for small business management.",
            link: "https://tinkerpro.io/ph",
        },
        {
            image: placeholder,
            title: "Brightway",
            description: "Business website for insurance startup.",
            link: "https://brightway.com.ph",
        },
        {
            image: placeholder,
            title: "Job Request System",
            description: "Digital platform for campus maintenance requests.",
            link: "http://ustpjrs.onrender.com/",
        },
        {
            image: placeholder,
            title: "HappyMeter",
            description: "Employee feedback and reporting tool.",
            link: "https://happy-meter-rating-pabe.vercel.app/",
        },
    ];

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <div className="text-gray-800 p-8 rounded-lg max-w-6xl mx-auto">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {displayedProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
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

            {/* Toggle Button */}
            {projects.length > 3 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                        {showAll ? "Show Less" : "Show All Projects"}
                    </button>
                </div>
            )}
        </div>
    );
}