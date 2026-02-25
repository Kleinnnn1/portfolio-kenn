import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-md">
            <div className="flex justify-center items-center py-4 px-6">

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-lg">
                    <li className="cursor-pointer hover:bg-gray-200 rounded">Home</li>
                    <li className="cursor-pointer hover:bg-gray-200 rounded">Projects</li>
                    <li className="cursor-pointer hover:bg-gray-200 rounded">Experience</li>
                    <li className="cursor-pointer hover:bg-gray-200 rounded">Contact</li>
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
                    <button
                        className="text-xl"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>

                    <ul className="space-y-4">
                        <li className="cursor-pointer hover:text-blue-600">Home</li>
                        <li className="cursor-pointer hover:text-blue-600">About Me</li>
                        <li className="cursor-pointer hover:text-blue-600">Services</li>
                        <li className="cursor-pointer hover:text-blue-600">Projects</li>
                        <li className="cursor-pointer hover:text-blue-600">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}