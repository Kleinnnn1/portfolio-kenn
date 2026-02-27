import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setActive(id);
        setIsOpen(false);
    };

    const desktopLinkClass = (id) =>
        `cursor-pointer rounded px-3 py-1 transition ${active === id
            ? "underline underline-offset-4 font-semibold"
            : "hover:bg-gray-200"
        }`;

    const mobileLinkClass = (id) =>
        `cursor-pointer hover:text-blue-600 ${active === id ? "underline underline-offset-4 font-semibold text-blue-600" : ""
        }`;

    return (
        <>
            {/* Floating Pill Navbar (on scroll) */}
            <div
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <ul className="hidden md:flex items-center gap-2 bg-white rounded-full shadow-lg px-8 py-2 text-lg font-medium border border-gray-100">
                    <li onClick={() => scrollTo("home")} className={desktopLinkClass("home")}>Home</li>
                    <li onClick={() => scrollTo("projects")} className={desktopLinkClass("projects")}>Projects</li>
                    <li onClick={() => scrollTo("experience")} className={desktopLinkClass("experience")}>Experience</li>
                    <li onClick={() => scrollTo("contact")} className={desktopLinkClass("contact")}>Contact</li>
                </ul>
            </div>

            {/* Original Navbar (at top) */}
            <nav
                className={`shadow-md transition-all duration-300 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
            >
                <div className="flex justify-center items-center py-4 px-6">

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-10 text-lg">
                        <li onClick={() => scrollTo("home")} className={desktopLinkClass("home")}>Home</li>
                        <li onClick={() => scrollTo("projects")} className={desktopLinkClass("projects")}>Projects</li>
                        <li onClick={() => scrollTo("experience")} className={desktopLinkClass("experience")}>Experience</li>
                        <li onClick={() => scrollTo("contact")} className={desktopLinkClass("contact")}>Contact</li>
                    </ul>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Overlay Shadow */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/30"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Mobile Slide Menu */}
                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="p-6 space-y-6">
                        <button className="text-xl" onClick={() => setIsOpen(false)}>✕</button>
                        <ul className="space-y-4">
                            <li onClick={() => scrollTo("home")} className={mobileLinkClass("home")}>Home</li>
                            <li onClick={() => scrollTo("projects")} className={mobileLinkClass("projects")}>Projects</li>
                            <li onClick={() => scrollTo("experience")} className={mobileLinkClass("experience")}>Experience</li>
                            <li onClick={() => scrollTo("contact")} className={mobileLinkClass("contact")}>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}