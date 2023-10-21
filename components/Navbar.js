import Link from "next/link";
import { useState } from "react";
import {
  UilMessage,
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilDocumentLayoutLeft,
  UilScenery,
  UilTimes,
  UilApps,
  UilBackpack,
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/" legacyBehavior>
          <a className="nav__logo">Wandu</a>
        </Link>
        <div
          className={`${active ? "show__menu" : "hide__menu"} nav__menu`}
          id="nav_menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link href="/" legacyBehavior>
                <a className="nav__link" onClick={handleClick}>
                  <UilEstate size="18" color="#6563FF" className="nav__icon" />
                  Home
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/#about-me" legacyBehavior>
                <a className="nav__link" onClick={handleClick}>
                  <UilUser size="18" color="#6563FF" className="nav__icon" />{" "}
                  About
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/#skills" legacyBehavior>
                <a className="nav__link">
                  <UilFileAlt size="18" color="#6563FF" className="nav__icon" />{" "}
                  Skills
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/#work-qualifications" legacyBehavior>
                <a className="nav__link">
                  <UilBackpack
                    size="18"
                    color="#6563FF"
                    className="nav__icon"
                  />{" "}
                  Qualifications
                </a>
              </Link>
            </li>
            {/* <li className="nav__item" onClick={handleClick}>
              <Link href="/services">
                <a className="nav__link">
                  <UilBriefcaseAlt size="18" color="#6563FF" /> Services
                </a>
              </Link>
            </li> */}
            <li className="nav__item" onClick={handleClick}>
              <Link href="/#portfolio" legacyBehavior>
                <a className="nav__link">
                  <UilScenery size="18" color="#6563FF" className="nav__icon" />{" "}
                  Portfolio
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/blog" legacyBehavior>
                <a className="nav__link">
                  <UilDocumentLayoutLeft
                    size="18"
                    color="#6563FF"
                    className="nav__icon"
                  />{" "}
                  Blog
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/#contact-me" legacyBehavior>
                <a className="nav__link">
                  <UilMessage size="18" color="#6563FF" className="nav__icon" />{" "}
                  Contactme
                </a>
              </Link>
            </li>
          </ul>
          <UilTimes
            size="18"
            color="#6563FF"
            className="nav__close"
            id="nav_close"
            onClick={handleClick}
          />
        </div>

        <div className="nav__btns">
          <div className="nav__toggle" id="nav_toggle" onClick={handleClick}>
            <UilApps size="18" color="#6563FF" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
