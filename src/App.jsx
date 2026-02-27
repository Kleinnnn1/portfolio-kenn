import React from "react";
import Navbar from "./components/Navbar";
import KennImage from "./assets/kenn-img.jpg";
import CarouselSkills from "./components/CarouselSkills";
import ProjectSection from "./components/Projects";
import ExperienceSection from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <div id="home" className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-yellow-400 rounded-full overflow-hidden shadow-xl">
              <img
                src={KennImage}
                alt="Kenn Balino"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Kenneth Jhun N. Balino
            </h1>

            <h2 className="mt-3 text-xl md:text-2xl text-gray-600">
              Full Stack Developer
            </h2>

            <p className="mt-6 text-gray-700 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Building intuitive and efficient apps with React, Laravel, and modern technologies.
              Passionate about clean code, seamless UX, and delivering real business impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                Hire Me
              </button>
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition cursor-pointer"
              >
                View Projects
              </button>
            </div>
          </div>

        </div>
      </div>

      <h3 className="text-center text-3xl font-semibold text-gray-800 pb-4">
        Tech Stack & Tools
      </h3>

      <CarouselSkills />

      <ProjectSection />

      <ExperienceSection />

      <ContactForm />

      <Footer />
    </>
  );
}

export default App;