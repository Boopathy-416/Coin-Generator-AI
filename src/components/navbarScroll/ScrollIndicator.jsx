import React, { useEffect, useState } from "react";

export default function Scroll() {
  const [activeSection, setActiveSection] = useState("Home"); 

  const sections = [
    { id: "home", label: "Home" }, 
    { id: "launch", label: "Launch" }, 
    { id: "referral", label: "Referral" }, 
    // { id: "services", label: "Services" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-20 z-50">
  {sections.map((section) => (
    <a
      key={section.id}
      href={`#${section.id}`}
      data-section={section.label}
      className={`relative w-5 h-5 rounded-full  shadow-[0_0_12px_rgba(0,0,0,50)] transition-transform duration-800 group ${
        activeSection === section.id ? "bg-red-800 scale-125 " : "bg-black"
      }`}
    >
      <div className="absolute  w-3 h-3  shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full bg-[#ffff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform"></div>
      <span className="absolute tracking-wide uppercase bottom-full mb-5 bg-[#7f0a2b] text-white font-semibold   text-xs px-4 py-2 rounded shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {section.label}
      </span>
    </a>
  ))}
</div>
  );
}
