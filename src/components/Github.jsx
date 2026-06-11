import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaFire } from "react-icons/fa";
import { SiJavascript, SiReact, SiPython, SiPhp, SiTailwindcss } from "react-icons/si";

const GITHUB_USERNAME = "Kleinnnn1";

const langMeta = {
    JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
    TypeScript: { icon: <SiReact />, color: "#3178C6" },
    PHP: { icon: <SiPhp />, color: "#777BB4" },
    Python: { icon: <SiPython />, color: "#3776AB" },
    CSS: { icon: <SiTailwindcss />, color: "#38BDF8" },
};

function StatCard({ label, value, icon, accent = "#38BDF8" }) {
    return (
        <div className="relative flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden backdrop-blur-sm">
            <span
                className="absolute -top-4 -right-4 h-16 w-16 rounded-full opacity-20 blur-2xl"
                style={{ background: accent }}
            />
            <span className="text-2xl" style={{ color: accent }}>{icon}</span>
            <span className="text-2xl font-bold text-white">{value ?? "—"}</span>
            <span className="text-xs text-slate-400 uppercase tracking-widest">{label}</span>
        </div>
    );
}

function RepoCard({ repo }) {
    const lang = repo.language;
    const meta = langMeta[lang] ?? { icon: <FaCodeBranch />, color: "#94a3b8" };

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-sky-500/40 hover:bg-sky-500/5"
        >
            {/* FIX: min-w-0 on the left side so truncate works correctly */}
            <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 text-sky-400 min-w-0">
                    <FaGithub className="text-sm shrink-0" />
                    <span className="text-sm font-semibold text-white group-hover:text-sky-400 transition-colors truncate">
                        {repo.name}
                    </span>
                </div>
                {lang && (
                    <span
                        className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium shrink-0"
                        style={{
                            color: meta.color,
                            background: `${meta.color}18`,
                            border: `1px solid ${meta.color}40`,
                        }}
                    >
                        {meta.icon}
                        {lang}
                    </span>
                )}
            </div>

            <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {repo.description || "No description provided."}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto pt-2 border-t border-white/5">
                <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                    <FaCodeBranch />
                    {repo.forks_count}
                </span>
                {repo.topics?.slice(0, 2).map((t) => (
                    <span key={t} className="text-sky-500/70 truncate">#{t}</span>
                ))}
            </div>
        </a>
    );
}

function ContributionGraph() {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <FaFire className="text-orange-400" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                    Contribution Activity
                </h3>
            </div>
            {/* FIX: min-w-[600px] is a valid Tailwind arbitrary value; min-w-150 is not */}
            <div className="overflow-x-auto">
                <img
                    src={`https://ghchart.rshah.org/40c463/${GITHUB_USERNAME}`}
                    alt="GitHub contribution chart"
                    className="w-full min-w-150 rounded opacity-90"
                    style={{ filter: "brightness(1.1) saturate(1.2)" }}
                />
            </div>
            <p className="text-xs text-slate-500 mt-3 text-right">
                via github.com/{GITHUB_USERNAME}
            </p>
        </div>
    );
}

function GitHubStatsCard() {
    return (
        // FIX: overflow-hidden prevents embed image from bleeding out of card
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <FaGithub className="text-slate-300" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                    GitHub Stats
                </h3>
            </div>
            {/* FIX: max-w-full + block so img never overflows its card on mobile */}
            <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=38bdf8&icon_color=38bdf8&text_color=94a3b8&bg_color=00000000&rank_icon=github`}
                alt="GitHub stats"
                className="w-full max-w-full block rounded"
            />
        </div>
    );
}

function TopLanguagesCard() {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <SiJavascript className="text-yellow-400" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                    Top Languages
                </h3>
            </div>
            <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8&bg_color=00000000&langs_count=6`}
                alt="Top languages"
                className="w-full max-w-full block rounded"
            />
        </div>
    );
}

function StreakCard() {
    return (
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
                <FaFire className="text-orange-400" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                    Streak
                </h3>
            </div>
            <img
                src={`https://streak-stats.demolab.com?user=${GITHUB_USERNAME}&theme=transparent&hide_border=true&stroke=ffffff10&ring=38bdf8&fire=fb923c&currStreakLabel=38bdf8&sideLabels=94a3b8&dates=475569&currStreakNum=ffffff&sideNums=ffffff`}
                alt="GitHub streak"
                className="w-full max-w-full block rounded"
            />
        </div>
    );
}

export default function Github() {
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const headers = { Accept: "application/vnd.github+json" };

        Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers }).then((r) => r.json()),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&per_page=6`, { headers }).then((r) => r.json()),
        ])
            .then(([user, repoList]) => {
                setProfile(user);
                setRepos(Array.isArray(repoList) ? repoList : []);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="github" className="relative w-full py-20 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">GITHUB ACTIVITY</h2>
                    <p className="text-slate-400 mt-2 max-w-3xl text-sm leading-relaxed mx-auto">
                        A live snapshot of my coding activity, stats, and recent repositories pulled straight from GitHub.
                    </p>
                </div>

                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-28 rounded-xl bg-white/5 animate-pulse" />
                        ))}
                    </div>
                ) : (
                    <>
                        {profile && (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <StatCard label="Public Repos" value={profile.public_repos} icon={<FaGithub />} accent="#38BDF8" />
                                <StatCard label="Followers" value={profile.followers} icon={<FaStar />} accent="#818CF8" />
                                <StatCard label="Following" value={profile.following} icon={<FaCodeBranch />} accent="#34D399" />
                                <StatCard label="Gists" value={profile.public_gists} icon={<FaFire />} accent="#FB923C" />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <GitHubStatsCard />
                            <TopLanguagesCard />
                            <StreakCard />
                        </div>

                        <div className="mb-8">
                            <ContributionGraph />
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
                                Recent Repositories
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {repos.map((repo) => (
                                    <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}