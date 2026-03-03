import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid rgba(100,120,160,0.15)",
                background: "rgba(10,10,10,0.75)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left: Logo + Name */}
                <div className="flex items-center gap-2">
                    <img src="/logo.svg" alt="KennBalino Logo" className="w-7 h-7 object-contain opacity-80" />
                    <span
                        style={{
                            fontSize: "12px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "rgba(160,180,220,0.5)",
                        }}
                    >
                        © {new Date().getFullYear()} KennBalino
                    </span>
                </div>

                {/* Center: thin divider line (desktop only) */}
                <div
                    className="hidden md:block flex-1 h-px mx-8"
                    style={{ background: "rgba(100,120,160,0.12)" }}
                />

                {/* Right: Social Icons */}
                <div className="flex gap-3">
                    {[
                        { href: "https://github.com/Kleinnnn1/", icon: <FaGithub /> },
                        { href: "https://www.linkedin.com/in/kenneth-jhun-n-balino/", icon: <FaLinkedin /> },
                        { href: "https://web.facebook.com/kenneth.jhun.n.balino/", icon: <FaFacebook /> },
                    ].map(({ href, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "34px",
                                height: "34px",
                                border: "1px solid rgba(100,120,160,0.2)",
                                borderRadius: "4px",
                                color: "rgba(160,180,220,0.5)",
                                fontSize: "16px",
                                transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100,120,160,0.6)";
                                e.currentTarget.style.color = "#ffffff";
                                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(100,120,160,0.2)";
                                e.currentTarget.style.color = "rgba(160,180,220,0.5)";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            {icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
}