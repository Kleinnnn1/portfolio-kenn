import { useState, useEffect } from "react";
import { MdCookie } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("ga_consent");
        if (!consent) {
            setTimeout(() => setVisible(true), 1000);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("ga_consent", "granted");
        window.loadGA?.();
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem("ga_consent", "denied");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <>
            <style>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .cookie-popup { animation: slideUp 0.35s ease forwards; }
                .cookie-popup .btn-accept:hover { background: #e5e7eb; }
                .cookie-popup .btn-decline:hover { background: rgba(255,255,255,0.07); color: #9ca3af; }
                .cookie-close:hover { color: #f9fafb !important; background: rgba(255,255,255,0.08); }
            `}</style>

            <div
                className="cookie-popup"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 9999,
                    width: "300px",
                    background: "#111827",
                    border: "1px solid rgba(100,120,160,0.3)",
                    borderRadius: "10px",
                    padding: "20px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
            >
                {/* Close button */}
                <button
                    onClick={decline}
                    className="cookie-close"
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        color: "#6b7280",
                        cursor: "pointer",
                        padding: "4px",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.2s",
                    }}
                    aria-label="Close"
                >
                    <IoClose size={18} />
                </button>

                <MdCookie style={{ fontSize: "28px", color: "#f59e0b", marginBottom: "10px" }} />

                <p style={{ color: "#f9fafb", fontSize: "14px", fontWeight: 600, margin: "0 0 6px" }}>
                    Cookie preferences
                </p>

                <p style={{ color: "#6b7280", fontSize: "12px", lineHeight: 1.6, margin: "0 0 16px" }}>
                    This site uses Google Analytics to understand visitor traffic.
                    No personal data is sold or shared.
                </p>

                <div style={{ display: "flex", gap: "8px" }}>
                    <button
                        onClick={decline}
                        className="btn-decline"
                        style={{
                            flex: 1,
                            background: "transparent",
                            color: "#6b7280",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "6px",
                            padding: "8px 0",
                            fontSize: "12px",
                            cursor: "pointer",
                            transition: "all 0.2s",
                        }}
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="btn-accept"
                        style={{
                            flex: 1,
                            background: "#ffffff",
                            color: "#111827",
                            border: "none",
                            borderRadius: "6px",
                            padding: "8px 0",
                            fontSize: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "background 0.2s",
                        }}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </>
    );
}