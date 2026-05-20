import { useState, useEffect } from "react";
import ga4cert from "../assets/certificateimg/GA4.png";
import digitalMarketingCert from "../assets/certificateimg/SEO.png";

const certificates = [
    {
        image: ga4cert,
        imagePlaceholder: "GA4 Certificate",
        title: "Use GA4 with other Tools and Data Sources",
        issuer: "Google",
        date: "May 20, 2026",
        credentialId: "57183 182867453",
        verifyLink: "https://skillshop.credential.net/4c6de440-32dd-4389-a116-58377d24b7c2",
        tag: "ANALYTICS & WEBSITE OPTIMIZATION",
    },
    {
        image: digitalMarketingCert,
        imagePlaceholder: "Digital Marketing Certificate",
        title: "Fundamentals of Digital Marketing",
        issuer: "Google",
        date: "June 22, 2025",
        credentialId: "392298775",
        verifyLink: "https://skillshop.exceedlms.com/student/award/2WYFp8JzWMEGw5eDSTJXmqp3",
        tag: "BASIC SEO & DIGITAL MARKETING",
    },
];

export default function CertificateSection() {
    const [hovered, setHovered] = useState(null);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        const handleKey = (e) => { if (e.key === "Escape") setLightbox(null); };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    useEffect(() => {
        document.body.style.overflow = lightbox ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [lightbox]);

    return (
        <section
            id="certificates"
            className="py-16 px-6"
            style={{
                borderTop: "1px solid rgba(100,120,160,0.12)",
                borderBottom: "1px solid rgba(100,120,160,0.12)",
            }}
        >
            <style>{`
                @keyframes certFadeIn {
                    from { opacity: 0; transform: translateY(24px) scale(0.97); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes lightboxIn {
                    from { opacity: 0; transform: scale(0.95); }
                    to   { opacity: 1; transform: scale(1); }
                }
                .cert-card { animation: certFadeIn 0.5s ease forwards; }
                .cert-card:hover .cert-img { transform: scale(1.04); }
                .cert-card:hover {
                    border-color: rgba(100,120,160,0.45) !important;
                    box-shadow: 0 0 0 1px rgba(100,120,160,0.2), 0 20px 40px rgba(0,0,0,0.5) !important;
                }
                .verify-btn:hover {
                    background: rgba(255,255,255,0.12) !important;
                    border-color: rgba(255,255,255,0.4) !important;
                }
                .lightbox-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    background: rgba(0,0,0,0.88);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                }
                .lightbox-modal {
                    animation: lightboxIn 0.25s ease forwards;
                    width: 100%;
                    max-width: 860px;
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    background: rgba(10,10,10,0.97);
                    border: 1px solid rgba(100,120,160,0.25);
                    border-radius: 8px;
                    overflow: hidden;
                }
                .lightbox-img-wrap {
                    flex: 1;
                    overflow-y: auto;
                    background: #ffffff;
                    -webkit-overflow-scrolling: touch;
                }
                .lightbox-img-wrap img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .lightbox-footer {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 14px 20px;
                    border-top: 1px solid rgba(100,120,160,0.15);
                    flex-wrap: wrap;
                }
                .lightbox-footer-info { min-width: 0; flex: 1; }
                .lightbox-footer-info p { margin: 0; }
                .lightbox-footer-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
                @media (max-width: 480px) {
                    .lightbox-overlay { padding: 10px; }
                    .lightbox-modal { max-height: 95vh; border-radius: 6px; }
                    .lightbox-footer { padding: 12px 14px; }
                    .lightbox-footer-info .cert-title-text { font-size: 12px; }
                    .lightbox-footer-info .cert-meta-text { font-size: 10px; }
                }
            `}</style>

            <div className="max-w-6xl mx-auto">

                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }} />
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">Certificates</h2>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }} />
                </div>

                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card"
                            style={{
                                animationDelay: `${index * 0.12}s`,
                                opacity: 0,
                                background: "rgba(10,10,10,0.65)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(100,120,160,0.2)",
                                borderRadius: "6px",
                                overflow: "hidden",
                                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                            }}
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >

                            <div
                                className="relative overflow-hidden cursor-pointer"
                                style={{ height: "180px" }}
                                onClick={() => setLightbox(cert)}
                            >
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="cert-img w-full h-full object-cover object-top"
                                        style={{ transition: "transform 0.5s ease" }}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center" style={{ background: "rgba(20,24,36,0.9)" }}>
                                        <span className="text-xs tracking-widest uppercase text-center px-4" style={{ color: "rgba(100,120,160,0.5)" }}>
                                            {cert.imagePlaceholder}<br />
                                            <span style={{ fontSize: "10px", opacity: 0.5 }}>Add image import</span>
                                        </span>
                                    </div>
                                )}

                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.85) 100%)" }} />

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
                                    {cert.tag}
                                </span>

                                <div
                                    className="absolute inset-0 flex items-center justify-center"
                                    style={{
                                        opacity: hovered === index ? 1 : 0,
                                        transition: "opacity 0.25s ease",
                                        background: "rgba(0,0,0,0.35)",
                                    }}
                                >
                                    <span
                                        className="text-xs tracking-widest uppercase px-3 py-1.5"
                                        style={{
                                            background: "rgba(10,10,10,0.8)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            borderRadius: "3px",
                                            color: "rgba(200,210,230,0.9)",
                                        }}
                                    >
                                        Preview
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="text-white font-semibold text-base leading-snug mb-1">{cert.title}</h3>
                                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "rgba(100,120,160,0.7)" }}>
                                    {cert.issuer} · {cert.date}
                                </p>
                                <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(100,120,160,0.12)" }}>
                                    <span className="text-xs" style={{ color: "rgba(100,120,160,0.5)" }}>ID: {cert.credentialId}</span>
                                </div>
                                <a
                                    href={cert.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-btn flex items-center justify-center gap-2 w-full py-2 text-xs tracking-widest uppercase font-medium text-white transition-all duration-200"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: "4px",
                                        background: "rgba(255,255,255,0.04)",
                                        textDecoration: "none",
                                    }}
                                >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                    Verify Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {lightbox && (
                <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
                    <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>

                        {/* Image — scrollable if tall on small screens */}
                        <div className="lightbox-img-wrap">
                            {lightbox.image ? (
                                <img src={lightbox.image} alt={lightbox.title} />
                            ) : (
                                <div style={{
                                    minHeight: "260px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "rgba(20,24,36,0.9)",
                                    color: "rgba(100,120,160,0.4)",
                                    fontSize: "13px",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                }}>
                                    Image not loaded — add import
                                </div>
                            )}
                        </div>

                        <div className="lightbox-footer">
                            <div className="lightbox-footer-info">
                                <p className="cert-title-text text-white font-medium" style={{ fontSize: "13px" }}>
                                    {lightbox.title}
                                </p>
                                <p className="cert-meta-text mt-0.5" style={{ fontSize: "11px", color: "rgba(100,120,160,0.6)" }}>
                                    {lightbox.issuer} · {lightbox.date} · ID: {lightbox.credentialId}
                                </p>
                            </div>
                            <div className="lightbox-footer-actions">
                                <a
                                    href={lightbox.verifyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="verify-btn flex items-center gap-1.5 px-4 py-2 text-xs tracking-widest uppercase font-medium text-white"
                                    style={{
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        borderRadius: "4px",
                                        background: "rgba(255,255,255,0.04)",
                                        textDecoration: "none",
                                        transition: "all 0.2s ease",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Verify ↗
                                </a>
                                <button
                                    onClick={() => setLightbox(null)}
                                    style={{
                                        background: "none",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        color: "rgba(150,160,180,0.8)",
                                        fontSize: "16px",
                                        lineHeight: 1,
                                        padding: "6px 10px",
                                        transition: "color 0.2s ease, border-color 0.2s ease",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(150,160,180,0.8)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                                    aria-label="Close"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}