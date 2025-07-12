import { useEffect, useRef, useState, type MouseEventHandler, type ReactNode } from "react";
import getRandInt from "../utils/getRandInt";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { GoTriangleDown } from "react-icons/go";

interface Settings {
  isDarkThemeActive: boolean;
  activeLang: string;
}

let settings: string | Settings = localStorage.getItem("settings") as string;
if (!settings) {
  localStorage.setItem(
    "settings",
    JSON.stringify({ isDarkThemeActive: false, activeLang: "en" })
  );
  settings = { isDarkThemeActive: false, activeLang: "en" } as Settings;
} else {
   settings = JSON.parse(settings as any) as Settings;
   settings.isDarkThemeActive && document.body.classList.add("dark")
   settings.activeLang == "fa" && document.body.classList.add("rtl")
}

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [activeLang, setActiveLang] = useState<string>(settings.activeLang);
  const [isDarkThemeActive, setIsDarkThemeActive] = useState<boolean>(
    settings.isDarkThemeActive
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        headerRef.current!.classList.add("stick");
      } else {
        headerRef.current!.classList.remove("stick");
      }
    });

    const elm = headerRef.current!.querySelector(".title") as HTMLDivElement;
    const interval = setInterval(() => {
      elm.classList.add("glitch");
      elm.style.animation = `.9s glitch ${getRandInt(1, 2)}`;
      setTimeout(() => {
        elm.classList.remove("glitch");
      }, 1000);
    }, 10000 * getRandInt(2, 5));

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...settings, isDarkThemeActive })
    );
  }, [isDarkThemeActive]);

  useEffect(() => {
    localStorage.setItem(
      "settings",
      JSON.stringify({ ...settings, activeLang })
    );
    activeLang === "en"
      ? document.body.classList.remove("rtl")
      : document.body.classList.add("rtl");
  }, [activeLang]);

  const handleMenuBtnClick = (ev: React.UIEvent) => {
    const toggleBtn = ev.target as HTMLDivElement;
    toggleBtn?.classList.toggle("open");
    document.querySelector("header .menu")!.classList.toggle("open");

  };

  const handleLangClick = (ev: Event) => {
    const langToggleElm = ev.target as HTMLDivElement
    langToggleElm.parentElement!.classList.toggle("open");
  }

  return (
    <div className="wrapper head" ref={headerRef}>
      <header className="container">
        <h1 className="title">
          <a href="#">
            <span>RazaviDev</span>
          </a>
        </h1>

        <div className="menu">
          <a href="#" className="menu-link --link">
            About
          </a>
          <a href="#" className="menu-link --link">
            What Can I Make?
          </a>
          <a href="#" className="menu-link --link">
            Services
          </a>
          <a href="#" className="menu-link --link">
            Articles
          </a>
          <a href="#" className="menu-link --link">
            Hire Me
          </a>
        </div>

                <div className="right-buttons">
          <div className="lang-toggle" onClick={handleLangClick as any}>
            <div
              className="active-lang"
              style={{ textTransform: "capitalize" }}
            >
              {activeLang as ReactNode}{" "}
              <GoTriangleDown style={{ pointerEvents: "none" }} />
            </div>
            <button className="en" onClick={() => setActiveLang("en")}>
              En
            </button>
            <button className="fa" onClick={() => setActiveLang("fa")}>
              Fa
            </button>
          </div>

          <button
            className="theme-toggle"
            onClick={() => setIsDarkThemeActive(!isDarkThemeActive)}
          >
            {isDarkThemeActive ? <BiMoon /> : <BiSun />}
          </button>

          <div className="menu-btn" onClick={handleMenuBtnClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
