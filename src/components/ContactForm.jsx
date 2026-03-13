import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Turnstile } from "@marsidev/react-turnstile";

const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(100,120,160,0.25)",
    borderRadius: "4px",
    padding: "10px 14px",
    color: "#e5e7eb",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const labelStyle = {
    display: "block",
    fontSize: "11px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(160,180,220,0.7)",
    marginBottom: "6px",
    fontWeight: 500,
};

function Field({ label, children }) {
    return (
        <div>
            <label style={labelStyle}>{label}</label>
            {children}
        </div>
    );
}

export default function ContactFormSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
    });
    const [status, setStatus] = useState(null);
    const [focused, setFocused] = useState(null);
    const [turnstileToken, setTurnstileToken] = useState(null); // 🔒 Turnstile token
    const turnstileRef = useRef(null);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        // 🍯 Honeypot check
        if (formData.honeypot) return;

        // 🔒 Turnstile check
        if (!turnstileToken) {
            setStatus("captcha");
            return;
        }

        setStatus("sending");

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    title: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
                setTurnstileToken(null);
                turnstileRef.current?.reset();
            })
            .catch(() => {
                setStatus("error");
                turnstileRef.current?.reset();
                setTurnstileToken(null);
            });
    };

    const focusStyle = (field) =>
        focused === field
            ? { ...inputStyle, borderColor: "rgba(100,120,160,0.7)", boxShadow: "0 0 0 3px rgba(90,122,224,0.1)" }
            : inputStyle;

    return (
        <section
            id="contact"
            className="py-16 px-6"
            style={{
                borderTop: "1px solid rgba(100,120,160,0.12)",
                borderBottom: "1px solid rgba(100,120,160,0.12)",
            }}
        >
            <div className="max-w-3xl mx-auto">

                {/* Section header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(100,120,160,0.3))" }} />
                    <h2 className="text-white text-2xl font-semibold tracking-widest uppercase">Get in Touch</h2>
                    <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(100,120,160,0.3), transparent)" }} />
                </div>

                <p className="text-center text-gray-500 text-sm mb-10 leading-relaxed">
                    Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
                </p>

                {/* Form card */}
                <div
                    style={{
                        background: "rgba(10,10,10,0.65)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(100,120,160,0.2)",
                        borderRadius: "6px",
                        padding: "36px",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <div style={{ display: "grid", gap: "20px" }}>

                            {/* Name + Email row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <Field label="Your Name">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("name")}
                                        onBlur={() => setFocused(null)}
                                        required
                                        placeholder="John Doe"
                                        style={focusStyle("name")}
                                    />
                                </Field>
                                <Field label="Email Address">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused(null)}
                                        required
                                        placeholder="you@example.com"
                                        style={focusStyle("email")}
                                    />
                                </Field>
                            </div>

                            {/* Subject */}
                            <Field label="Subject">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("subject")}
                                    onBlur={() => setFocused(null)}
                                    required
                                    placeholder="Subject of your message"
                                    style={focusStyle("subject")}
                                />
                            </Field>

                            {/* Message */}
                            <Field label="Message">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    required
                                    rows={5}
                                    placeholder="Write your message here..."
                                    style={{ ...focusStyle("message"), resize: "vertical" }}
                                />
                            </Field>

                            {/* 🍯 Honeypot */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formData.honeypot}
                                onChange={handleChange}
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {/* 🔒 Cloudflare Turnstile */}
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Turnstile
                                    ref={turnstileRef}
                                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                                    onSuccess={(token) => setTurnstileToken(token)}
                                    onExpire={() => setTurnstileToken(null)}
                                    onError={() => setTurnstileToken(null)}
                                    options={{ theme: "dark" }}
                                />
                            </div>

                            {/* Status messages */}
                            {status === "captcha" && (
                                <div style={{
                                    background: "rgba(224,180,90,0.08)",
                                    border: "1px solid rgba(224,180,90,0.25)",
                                    borderRadius: "4px",
                                    padding: "10px 14px",
                                    color: "#e0b45a",
                                    fontSize: "13px",
                                    letterSpacing: "0.05em",
                                }}>
                                    ⚠ &nbsp;Please complete the CAPTCHA first.
                                </div>
                            )}
                            {status === "success" && (
                                <div style={{
                                    background: "rgba(90,224,122,0.08)",
                                    border: "1px solid rgba(90,224,122,0.25)",
                                    borderRadius: "4px",
                                    padding: "10px 14px",
                                    color: "#5ae07a",
                                    fontSize: "13px",
                                    letterSpacing: "0.05em",
                                }}>
                                    ✓ &nbsp;Your message has been sent successfully!
                                </div>
                            )}
                            {status === "error" && (
                                <div style={{
                                    background: "rgba(224,90,122,0.08)",
                                    border: "1px solid rgba(224,90,122,0.25)",
                                    borderRadius: "4px",
                                    padding: "10px 14px",
                                    color: "#e05a7a",
                                    fontSize: "13px",
                                    letterSpacing: "0.05em",
                                }}>
                                    ✕ &nbsp;Something went wrong. Please try again.
                                </div>
                            )}

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                style={{
                                    width: "100%",
                                    padding: "12px",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    borderRadius: "4px",
                                    background: status === "sending" ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.06)",
                                    color: status === "sending" ? "rgba(255,255,255,0.35)" : "#ffffff",
                                    fontSize: "12px",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    fontWeight: 600,
                                    cursor: status === "sending" ? "not-allowed" : "pointer",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={(e) => {
                                    if (status !== "sending") {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                }}
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}