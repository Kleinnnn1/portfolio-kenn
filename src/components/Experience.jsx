import placeholder from "../assets/kenn-img.jpg";

export default function ExperienceSection() {
    const experiences = [
        {
            logo: placeholder,
            role: "Full Stack Developer",
            company: "ABC Tech Solutions",
            period: "Jan 2022 - Present",
            description:
                "Developed web applications using React, Django, and Tailwind CSS. Collaborated with designers and backend engineers to deliver responsive and efficient solutions.",
        },
        {
            logo: placeholder,
            role: "Frontend Developer",
            company: "XYZ Web Agency",
            period: "Jun 2021 - Dec 2021",
            description:
                "Built interactive UI components and optimized user experience for client websites using React and Next.js.",
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 p-8 rounded-lg max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                >
                    {/* Logo */}
                    <div className="flex-shrink-0 p-4 bg-gray-100 flex items-center justify-center">
                        <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain" />
                    </div>

                    {/* Details */}
                    <div className="p-4 flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-gray-700 italic mb-2">
                            {exp.company} | {exp.period}
                        </p>
                        <p className="text-gray-700 text-sm">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}