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
        <SiLaravel className="text-red-500" />,
        <SiDjango className="text-green-500" />,
        <SiSupabase className="text-emerald-500" />,
        <FaPhp className="text-indigo-400" />,

        // Frontend
        <FaReact className="text-cyan-400" />,
        <SiNextdotjs className="text-black" />,
        <SiTypescript className="text-blue-500" />,
        <SiJavascript className="text-yellow-400" />,
        <SiTailwindcss className="text-sky-400" />,
        <SiBootstrap className="text-purple-500" />,

        // Database
        <SiMysql className="text-blue-400" />,
        <SiPostgresql className="text-indigo-500" />,
    ];

    return (
        <div className="relative overflow-hidden py-8 bg-yellow-200">
            {/* Gradient Left */}
            <div className="absolute left-0 top-0 h-full w-24 pointer-events-none" />

            {/* Gradient Right */}
            <div className="absolute right-0 top-0 h-full w-24 pointer-events-none" />

            <div className="flex w-max animate-scroll gap-28 hover:[animation-play-state:paused]">
                {[...skills, ...skills].map((Icon, index) => (
                    <div
                        key={index}
                        className="text-6xl md:text-7xl transition duration-300 hover:scale-150"
                    >
                        {Icon}
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