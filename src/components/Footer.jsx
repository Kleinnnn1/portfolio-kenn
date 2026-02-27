import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Logo + Copyright */}
                <div className="flex items-center gap-2 text-center md:text-left">
                    <img src="/logo.png" alt="KennBalino Logo" className="w-8 h-8 object-contain" />
                    {new Date().getFullYear()} KennBalino
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4 text-xl">
                    <a href="https://github.com/Kleinnnn1/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/kenneth-jhun-n-balino/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://web.facebook.com/kenneth.jhun.n.balino/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
}