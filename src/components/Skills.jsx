import {
    FaPhp,
    FaReact,
    FaAws,
    FaDigitalOcean,
    FaWordpress,
    FaNodeJs,
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
    SiRender,
    SiN8N,
    SiVercel,
    SiReact,          // React Native uses same icon
    SiSqlite,
    SiGoogleanalytics,
    SiPrisma,
} from "react-icons/si";

// SEO icon — no dedicated icon in react-icons, so we use a clean inline SVG
const SeoIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[1em] h-[1em]"
    >
        <circle cx="11" cy="11" r="7" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
        <path d="M8 11h6M11 8v6" />
    </svg>
);

const skills = [
    // Row 1 — Frontend
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-purple-400" />, name: "Bootstrap" },
    // Row 2 — Backend & DB
    { icon: <SiLaravel className="text-red-400" />, name: "Laravel" },
    { icon: <SiDjango className="text-emerald-400" />, name: "Django" },
    { icon: <FaPhp className="text-indigo-400" />, name: "PHP" },
    { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
    { icon: <SiPrisma className="text-teal-300" />, name: "Prisma ORM" },
    { icon: <SiReact className="text-sky-300" />, name: "React Native" },
    // Row 3 — Data & Storage
    { icon: <SiSupabase className="text-emerald-400" />, name: "Supabase" },
    { icon: <SiMysql className="text-blue-300" />, name: "MySQL" },
    { icon: <SiPostgresql className="text-indigo-400" />, name: "PostgreSQL" },
    { icon: <SiSqlite className="text-blue-300" />, name: "SQLite" },
    { icon: <SiGoogleanalytics className="text-orange-400" />, name: "GA4" },
    { icon: <span className="text-lime-400 text-4xl leading-none"><SeoIcon /></span>, name: "SEO" },
    // Row 4 — Cloud & Tooling
    { icon: <FaAws className="text-orange-400" />, name: "AWS" },
    { icon: <SiRender className="text-violet-400" />, name: "Render" },
    { icon: <FaDigitalOcean className="text-blue-400" />, name: "DigitalOcean" },
    { icon: <SiN8N className="text-rose-400" />, name: "n8n" },
    { icon: <SiVercel className="text-white" />, name: "Vercel" },
    { icon: <FaWordpress className="text-sky-400" />, name: "WordPress" },
];

export default function SkillSection() {
    return (
        <section
            id="skills"
            className="py-12 px-6"
            style={{
                borderTop: "1px solid rgba(100,120,160,0.12)",
                borderBottom: "1px solid rgba(100,120,160,0.12)",
                scrollMarginTop: "80px",
            }}
        >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-10">
                <div
                    className="h-px flex-1"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }}
                />
                <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">
                    Skills
                </h2>
                <div
                    className="h-px flex-1"
                    style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }}
                />
            </div>

            <div className="max-w-4xl mx-auto">
                <div
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px"
                    style={{ border: "1px solid rgba(100,120,160,0.15)", background: "rgba(100,120,160,0.1)" }}
                >
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center justify-center gap-3 py-7 px-4 transition-all duration-300 cursor-default"
                            style={{
                                background: "rgba(10,10,10,0.7)",
                                backdropFilter: "blur(4px)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "rgba(10,10,10,0.7)";
                            }}
                        >
                            <div className="text-4xl transition-transform duration-300 group-hover:scale-125">
                                {skill.icon}
                            </div>
                            <span className="text-xs font-medium tracking-widest uppercase text-gray-500 group-hover:text-gray-200 transition-colors duration-300 whitespace-nowrap">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}