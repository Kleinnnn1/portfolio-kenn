import React from "react";
import Navbar from "./components/Navbar";
import KennImage from "./assets/kenn-img.jpg";
import ProjectSection from "./components/Projects";
import ExperienceSection from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PixelGrid from "./ui/background";
import SkillSection from "./components/Skills";
import CertificateSection from "./components/Certificates";
import CookieBanner from "./components/CookieBanner";
import Github from "./components/Github";

function App() {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <CookieBanner />
      <PixelGrid />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div id="home" className="pt-20 pb-12 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="flex justify-center lg:justify-start">
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-white rounded-full overflow-hidden shadow-xl">

                {!imageLoaded && (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(10,10,10,0.6)" }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        border: "2px solid rgba(255,255,255,0.15)",
                        borderTop: "2px solid rgba(255,255,255,0.8)",
                        borderRadius: "50%",
                        animation: "spin 0.7s linear infinite",
                      }}
                    />
                  </div>
                )}

                <img
                  src={KennImage}
                  alt="Kenneth Jhun Balino"
                  className="w-full h-full object-cover"
                  style={{
                    opacity: imageLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease",
                  }}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Kenneth Jhun N. Balino
              </h1>

              <h2 className="mt-3 text-xl md:text-2xl text-gray-300">
                Full Stack Developer
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Hi, I'm a Full Stack Developer with 3 years of experience building modern, scalable
                web applications using Laravel, React, Node.js, Django and other modern technologies.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToContact}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition cursor-pointer font-semibold"
                >
                  Hire Me
                </button>
                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
                >
                  View Projects
                </button>
                <a
                  href="/Full_Stack_Developer_Kenneth_Balino_June2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400/10 transition cursor-pointer text-center flex items-center gap-2 justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                  </svg>
                  View Resume
                </a>
              </div>
            </div>

          </div>
        </div>

        <SkillSection />

        <ProjectSection />

        <ExperienceSection />

        <CertificateSection />

        <ContactForm />

        <Github />

        <Footer />
      </div >
    </>
  );
}

export default App;