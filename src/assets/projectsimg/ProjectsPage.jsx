import { useEffect } from "react";
import Navbar from "../../../../../../PROJECTS 2025/kennbalno/src/components/Navbar";
import TechTag from "../../../../../../PROJECTS 2025/kennbalno/src/components/TechTag";
import ProjectsBox from "../../../../../../PROJECTS 2025/kennbalno/src/components/ProjectsBox";
import { FaHtml5, FaCss3Alt, FaWordpress, FaReact, FaCloud } from "react-icons/fa";
import { SiElementor, SiDjango, SiSupabase, SiDigitalocean, SiRender } from "react-icons/si";
import { MdPlayArrow } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

import brightway from "../../assets/images/projects/brightway.png";
import jrs from "../../assets/images/projects/jrs.png";
import happyMeter from "../../assets/images/projects/happymeter.png";
import cashflow from "../../assets/images/projects/cashflow.png";
import apxwifi from "../../assets/images/projects/apxwifi.png";
import warehouseINVS from "../../assets/images/projects/warehouseINVS.png"
import AIConvesation from "../../assets/images/projects/aibuilderimg.png"
import tinkerPro from "../../assets/images/projects/tinkerproimg.png"

const projects = [
    {
        image: tinkerPro,
        title: "TinkerPro POS",
        description:
            "Tinker Pro is a modern website built for a startup offering a smart Point of Sale (POS) system that helps small business owners manage sales, track inventory, and view reports anytime, anywhere. With its clean and user-friendly design, it clearly shows how Tinker Pro can simplify business operations.",
        link: "https://tinkerpro.io/ph",
        techs: [
            { icon: RiNextjsFill, label: "NextJS", color: "text-white" },
            { icon: TbBrandTypescript, label: "Typescript", color: "text-cyan-400" },
            { icon: MdPlayArrow, label: "Vercel", color: "text-gray-300 transform -rotate-90 w-6 h-6" }
        ],
    },
    {
        image: brightway,
        title: "Brightway",
        description:
            "A business website for a startup insurance company to get more clients. This website is built using WordPress Elementor and deployed using DigitalOcean.",
        link: "https://brightway.com.ph",
        techs: [
            { icon: FaWordpress, label: "WordPress", color: "text-blue-400" },
            { icon: SiElementor, label: "Elementor", color: "text-pink-400" },
            { icon: SiDigitalocean, label: "Digital Ocean", color: "text-blue-400" },
        ],
    },
    {
        image: jrs,
        title: "Job Request System",
        description:
            "A digital platform that streamlines campus maintenance by replacing traditional paper-based processes. Staff can easily submit, track, and manage maintenance requests online, improving response times, reducing paperwork, and enhancing overall efficiency. This website is build using Django and React, and deployed in Render.",
        link: "http://ustpjrs.onrender.com/",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiDjango, label: "Django", color: "text-green-500" },
            { icon: SiRender, label: "Render", color: "text-white-500" },
        ],
    },
    {
        image: happyMeter,
        title: "HappyMeter",
        description:
            "A web-based feedback and reporting tool designed to monitor and track employee satisfaction in the workplace, helping organizations gain insights and improve office morale and productivity. This website is build using React and Supabase and deployed using Vercel.",
        link: "https://happy-meter-rating-pabe.vercel.app/",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
            { icon: MdPlayArrow, label: "Vercel", color: "text-gray-300 transform -rotate-90 w-6 h-6" }
        ],
    },
    {
        image: warehouseINVS,
        title: "Warehouse INVS",
        description: "A fast, efficient, and intuitive warehouse inventory system built to streamline stock management. It allows precise tracking of tools, office supplies, and equipment, enhanced with built‑in notifications, QR support, and real‑time issuance monitoring.",
        link: "https://warehouse-invs.vercel.app/",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
            { icon: MdPlayArrow, label: "Vercel", color: "text-gray-300 transform -rotate-90 w-6 h-6" }
        ],
    },
    {
        image: AIConvesation,
        title: "AI Conversation App",
        description: "A voice-enabled chat application that lets users talk to an AI using text or speech. Built with React for the frontend and Django for the backend, it integrates Google Gemini API for smart responses.",
        link: "https://ai-builder-ae1p.onrender.com/",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
            { icon: SiRender, label: "Render", color: "text-white-500" },
        ],
    },
    {
        image: cashflow,
        title: "CashFlow",
        description: "Simple cash flow tracker using React and Supabase.",
        link: "https://cashflow-system-khaki.vercel.app/",
        techs: [
            { icon: FaReact, label: "React", color: "text-cyan-400" },
            { icon: SiSupabase, label: "Supabase", color: "text-emerald-400" },
            { icon: MdPlayArrow, label: "Vercel", color: "text-gray-300 transform -rotate-90 w-6 h-6" }
        ],
    },
    {
        image: apxwifi,
        title: "APX WiFi Portal",
        description: "Landing page and login flow for an internet service provider.",
        techs: [
            { icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
            { icon: FaCss3Alt, label: "CSS3", color: "text-blue-500" },
        ],
    },
];

function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="px-6 pt-24">
                <h1 className="text-4xl font-bold text-white underline underline-offset-4 decoration-red-500 mb-8 text-center">
                    Projects
                </h1>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
                    {projects.map((project, index) => (
                        <div key={index} className="h-full mb-15">

                            <ProjectsBox image={project.image} index={index} link={project.link}>
                                <h2 className="text-lg font-bold text-red-500 mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-xs text-gray-300 mb-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.techs.map((tech, idx) => (
                                        <TechTag
                                            key={idx}
                                            icon={tech.icon}
                                            label={tech.label}
                                            color={tech.color}
                                        />
                                    ))}
                                </div>
                            </ProjectsBox>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
