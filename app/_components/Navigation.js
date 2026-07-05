"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const navItems = [
    { href: "#home", label: "Home", sectionId: "home" },
    { href: "#projects", label: "Projects", sectionId: "projects" },
    {
      href: "#certifications",
      label: "Certifications",
      sectionId: "certifications",
    },
    { href: "#about-me", label: "About Me", sectionId: "about-me" },
    { href: "#contact", label: "Let's Connect", sectionId: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    opacity: 0,
  });
  const itemRefs = useRef({});

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.sectionId);

    const updateActiveSection = () => {
      const topOffset = 140;
      const firstSection = document.getElementById(sectionIds[0]);

      if (firstSection && window.scrollY < topOffset) {
        setActiveSection((current) =>
          current === sectionIds[0] ? current : sectionIds[0]
        );
        return;
      }

      const currentScroll = window.scrollY + topOffset;
      let nextActive = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && currentScroll >= section.offsetTop) {
          nextActive = id;
        }
      });

      setActiveSection((current) =>
        current === nextActive ? current : nextActive
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const activeElement = itemRefs.current[activeSection];
      if (!activeElement) return;

      setIndicatorStyle({
        width: activeElement.offsetWidth,
        left: activeElement.offsetLeft,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeSection]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="hidden lg:block">
        <div className="relative flex w-full items-center gap-1 rounded-full border border-primary-200 bg-white/95 p-2 shadow-sm backdrop-blur-sm">
          <span
            className="pointer-events-none absolute left-0 bottom-2 top-2 rounded-full bg-primary-500 transition-all duration-300 ease-out"
            style={{
              width: `${indicatorStyle.width}px`,
              transform: `translateX(${indicatorStyle.left}px)`,
              opacity: indicatorStyle.opacity,
            }}
          />

          {navItems.map((item) => (
            <Link
              key={item.sectionId}
              href={item.href}
              ref={(node) => {
                if (node) {
                  itemRefs.current[item.sectionId] = node;
                }
              }}
              className={`relative z-10 inline-flex items-center justify-center text-center no-underline rounded-full px-5 py-3 text-base font-semibold transition-colors duration-300 ${
                activeSection === item.sectionId
                  ? "text-white"
                  : "text-gray-950 hover:text-primary-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div onClick={toggleMenu} className="lg:hidden">
        <i
          className={`pi ${
            isOpen ? "pi-times" : "pi-bars"
          }  group-hover:text-white text-primary-500 text-2xl leading-none`}
        ></i>
      </div>
      <div
        className={`absolute inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        {navItems.map((item) => (
          <Link
            key={item.sectionId}
            href={item.href}
            className={`no-underline rounded-lg p-2 ${
              activeSection === item.sectionId
                ? "bg-primary-500 text-white"
                : "text-gray-950"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
