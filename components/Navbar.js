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
} from "@iconscout/react-unicons";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <Link href="/">
          <a className="nav__logo">Wandu</a>
        </Link>
        <div className={`${active ? "show__menu" : "hide__menu"} nav__menu`} id="nav_menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link href="/">
                <a className="nav__link" onClick={handleClick}>
                  <UilEstate size="18" color="#6563FF" />
                  Home
                </a>
              </Link>
            </li>
            <li className="nav__item">
              <Link href="/about">
                <a className="nav__link" onClick={handleClick}>
                  <UilUser size="18" color="#6563FF" /> About
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/skills">
                <a className="nav__link">
                  <UilFileAlt size="18" color="#6563FF" /> Skills
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/services">
                <a className="nav__link">
                  <UilBriefcaseAlt size="18" color="#6563FF" /> Services
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/portfolio">
                <a className="nav__link">
                  <UilScenery size="18" color="#6563FF" /> Portfolio
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/blog">
                <a className="nav__link">
                  <UilDocumentLayoutLeft size="18" color="#6563FF" /> Blog
                </a>
              </Link>
            </li>
            <li className="nav__item" onClick={handleClick}>
              <Link href="/contact">
                <a className="nav__link">
                  <UilMessage size="18" color="#6563FF" /> Contactme
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
