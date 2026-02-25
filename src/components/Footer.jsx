import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Copyright */}
                <div className="text-center md:text-left">
                    &copy; {new Date().getFullYear()} KennBalino
                </div>


                {/* Right: Social Icons */}
                <div className="flex gap-4 text-xl">
                    <a href="#" className="hover:text-yellow-400 transition">
                        <FaGithub />
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="hover:text-yellow-400 transition">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
}