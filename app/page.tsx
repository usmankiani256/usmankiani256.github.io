"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import FeaturedWork from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      const mainContainer = document.querySelector(".main-content");

      if (heroSection && mainContainer) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > heroHeight * 0.8) {
          mainContainer.classList.add("active");
        } else {
          mainContainer.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <div className="main-content blurred-bg">
        <About />
        <FeaturedWork />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}
