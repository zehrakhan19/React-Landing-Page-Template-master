import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const Navigation = (props) => {
  const [navbarBg, setNavbarBg] = useState("transparent");
  const [navbarLink, setNavbarLink] = useState(isMobile ? "#888281" : "#fff");

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setNavbarBg("#fff");
        setNavbarLink("#888281");
      } else {
        if (window.scrollY > 0) {
          setNavbarBg("#fff");
          setNavbarLink("#888281");
        } else {
          setNavbarBg("#888281");
          setNavbarLink("#fff");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logo =
    "https://ats.sgp1.cdn.digitaloceanspaces.com/ats-landingpage/ats-blue-logo.png";
  // "https://ats.sgp1.cdn.digitaloceanspaces.com/ats-landingpage/ats-landing-logo.png";
  return (
    <nav
      id="menu"
      className="navbar navbar-default navbar-fixed-top"
      style={{
        backgroundColor: navbarBg,
        boxShadow: navbarBg === "white" && "0 0 10px rgba(0, 0, 0, 0.15)",
      }}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {/* React Landing Page */}
            <img src={logo} className="logo-img" alt="" />
          </a>
        </div>

        <div
          className={`collapse navbar-collapse ${
            isMobile ? "navbar-collapse-mob" : "navbar-collapse-lap"
          }`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                style={{ color: navbarLink }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
