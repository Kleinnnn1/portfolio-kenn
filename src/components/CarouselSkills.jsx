import {
    FaPhp,
    FaReact,
} from "react-icons/fa";
import {
    SiDjango,
    SiSupabase,
    SiTailwindcss,
    SiBootstrap,
    SiPostgresql,
    SiMysql,
    SiLaravel,
    SiJavascript,
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

export default function CarouselSkills() {
    const skills = [
        // Backend
        { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
        { icon: <SiDjango className="text-green-500" />, name: "Django" },
        { icon: <SiSupabase className="text-emerald-500" />, name: "Supabase" },
        { icon: <FaPhp className="text-indigo-400" />, name: "PHP" },

        // Frontend
        { icon: <FaReact className="text-cyan-400" />, name: "React" },
        { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
        { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
        { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
        { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },

        // Database
        { icon: <SiMysql className="text-blue-400" />, name: "MySQL" },
        { icon: <SiPostgresql className="text-indigo-500" />, name: "PostgreSQL" },
    ];

    return (
        <div className="relative overflow-hidden py-8 bg-yellow-200">
            {/* Gradient Left */}
            <div className="absolute left-0 top-0 h-full w-24 pointer-events-none" />

            {/* Gradient Right */}
            <div className="absolute right-0 top-0 h-full w-24 pointer-events-none" />

            <div className="flex w-max animate-scroll gap-28 hover:[animation-play-state:paused]">
                {[...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 transition duration-300 hover:scale-150"
                    >
                        <div className="text-6xl md:text-7xl">
                            {skill.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            <style>
                {`
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }

                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                    }
                `}
            </style>
        </div>
    );
}