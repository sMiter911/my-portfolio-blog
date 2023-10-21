import Head from "next/head";
import Image from "next/image";
import omelette from "../public/omelette-removebg_edit.png";
import vusela from "../public/vusela.png";
import coming from "../public/coming_soon.jpg";
import company from "../public/pexels-serpstat-572056.jpg";
import prime from "../public/prime_pixels.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import wandu from "../public/wandu_award.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import {
  UilTwitter,
  UilFacebookF,
  UilInstagram,
  UilLinkedin,
  UilGithub,
  UilMessage,
  UilBracketsCurly,
  UilServers,
  UilPuzzlePiece,
  UilSwatchbook,
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt,
  UilDownloadAlt,
  UilArrowRight,
} from "@iconscout/react-unicons";

export default function Home() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <Head>
        <title>Wandu | Home</title>
        <meta name="keywords" content="wandu" />
      </Head>
      <section className="home section">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://twitter.com/smiter911"
                className="home_social_icon"
              >
                <UilTwitter size="18" color="#6563FF" />
              </a>
              <a
                href="https://www.facebook.com/WanduMathunjwa"
                className="home_social_icon"
              >
                <UilFacebookF size="18" color="#6563FF" />
              </a>
              <a
                href="https://www.instagram.com/smiter911/"
                className="home_social_icon"
              >
                <UilInstagram size="18" color="#6563FF" />
              </a>
              <a
                href="https://www.linkedin.com/in/wandumuzi-mathunjwa/"
                className="home_social_icon"
              >
                <UilLinkedin size="18" color="#6563FF" />
              </a>
              <a
                href="https://github.com/sMiter911"
                className="home_social_icon"
              >
                <UilGithub size="18" color="#6563FF" />
              </a>
            </div>

            <div className="home__img image">
              <Image src={omelette} width={550} alt="speciality" />
            </div>
            <div className="home__data">
              <h1 className="home__title">Hi! Wandu here...</h1>
              <h1 className="home__subtitle">I&apos;m a Fullstack Developer</h1>
              <p className="home__description">
                I offer a high level of experience in software development and
                produce good quality work. I also make a mean omelette.
              </p>
              <Link href="/contact">
                <a className="button button--flex">
                  Contact Me{" "}
                  <UilMessage size="18" color="#FFF" className="button__icon" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="about section" id="about-me">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
          <Image
            src={wandu}
            alt="Picture of the Wandu"
            sizes="50vw"
            className="about__img"
            layout="responsive"
          />

          <div className="about__data">
            <p className="about__description">
              Software developer with a passion for learning and problem
              solving. I have extensive experience in working with web
              technologies and UI/UX design. I am a self-motivated individual
              who is always looking for new challenges and opportunities.
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">8+</span>
                <span className="about__info-name">
                  Years <br /> Experience
                </span>
              </div>
              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name">
                  Projects <br /> Completed
                </span>
              </div>
              <div>
                <span className="about__info-title">5+</span>
                <span className="about__info-name">
                  Companies <br /> Worked For
                </span>
              </div>
            </div>

            <div className="about__buttons">
              <a
                className="button button--flex"
                href="https://drive.google.com/file/d/1-LB60KGPjuqHh3dZR8sKRgdj-zWQO8Y5/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
                <UilDownloadAlt
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills & Services</h2>
        <span className="section__subtitle">
          I deliver top-notch projects using modern technologies and maintain a
          focus on efficient and clean code. Contact me to discuss requirements
          and pricing.
        </span>

        <div className="cp_container">
          <div className="cp_row">
            <div className="cp_service">
              <UilBracketsCurly
                size="38"
                color="#6563FF"
                className="cp_skills__icon"
              />
              <div>
                <h2 className="skills__titles">Frontend Developer</h2>
                <span className="skills_subtitle">More than 4+ years</span>
              </div>
            </div>
            <div className="cp_service">
              <UilServers
                size="38"
                color="#6563FF"
                className="cp_skills__icon"
              />
              <div>
                <h2 className="skills__titles">Backend Developer</h2>
                <span className="skills_subtitle">More than 5+ years</span>
              </div>
            </div>
            <div className="cp_service">
              <UilPuzzlePiece
                size="38"
                color="#6563FF"
                className="cp_skills__icon"
              />
              <div>
                <h2 className="skills__titles">COBOL Developer</h2>
                <span className="skills_subtitle">More than 3+ years</span>
              </div>
            </div>
            <div className="cp_service">
              <UilSwatchbook
                size="38"
                color="#6563FF"
                className="cp_skills__icon"
              />
              <div>
                <h2 className="skills__titles">UI/UX Designer</h2>
                <span className="skills_subtitle">More than 2+ years</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="qualification section" id="work-qualifications">
        <h2 className="section__title">Qualifications and Work Experience</h2>
        <span className="section__subtitle">Where I am from...</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#education"
              onClick={toggle}
            >
              <UilGraduationCap
                size="18"
                color="#6563FF"
                className="qualification__icon"
              />
              Education
            </div>
            <div
              className="qualification__button button--flex"
              data-target="#work"
              onClick={toggle}
            >
              <UilBriefcaseAlt
                size="18"
                color="#6563FF"
                className="qualification__icon"
              />
              Work
            </div>
          </div>

          <div className="qualification__sections">
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
              style={{
                display: showMe ? "none" : "block",
              }}
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">BSc: Computing</h3>
                  <span className="qualification__subtitle">UNISA</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2024 -
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    BComm in Business Informatics
                  </h3>
                  <span className="qualification__subtitle">UNISA</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2007 - 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    BTech: IT(Multimedia)
                  </h3>
                  <span className="qualification__subtitle">
                    Tshwane University of Technology
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2009 - 2011
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">NDip: IT(Multimedia)</h3>
                  <span className="qualification__subtitle">
                    Tshwane University of Technology
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2006 - 2009
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 className="qualification__title">
                    O&apos;Level Certificate
                  </h3>
                  <span className="qualification__subtitle">
                    Salesian High School
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2004
                  </div>
                </div>
              </div>
            </div>

            <div
              className="qualification__content"
              data-content
              id="work"
              style={{
                display: showMe ? "block" : "none",
              }}
            >
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Fullstack developer</h3>
                  <span className="qualification__subtitle">Zyberfox</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    (Current)
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Fullstack Developer</h3>
                  <span className="qualification__subtitle">
                    Velocity Cubed
                  </span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2021- 2022
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Software Developer</h3>
                  <span className="qualification__subtitle">Conclude</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2021 - 2021
                  </div>
                </div>
              </div>
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Developer</h3>
                  <span className="qualification__subtitle">Platinum Life</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2019 - 2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  {/* <span className="qualification__line"></span> */}
                </div>
                <div>
                  <h3 className="qualification__title">
                    Cobol Dev/Web Applications Dev
                  </h3>
                  <span className="qualification__subtitle">Standard Bank</span>
                  <div className="qualification__calendar">
                    <UilCalendarAlt
                      size="18"
                      color="#757575"
                      className="qualification__icon"
                    />
                    2012 - 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Most recent work</span>

        <Swiper
          className="portfolio__container container mySwiper"
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="portfolio__content grid">
              <Image
                src={vusela}
                sizes="50vw"
                alt="Vusela"
                className="portfolio__img"
                layout="responsive"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Web3 Application</h3>
                <p className="portfolio__description">
                  A Web3 application that allows users to wave and send
                  messages. They may even get free Ethereum.
                </p>
                <a
                  className="button button--flex button--small portfolio__button"
                  href="https://waveportal-starter-project.smiter911.repl.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <UilArrowRight
                    size="18"
                    color="#FFF"
                    className="button__icon"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__content grid">
              <Image
                src={coming}
                sizes="50vw"
                alt="Coming"
                className="portfolio__img"
                layout="responsive"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">NFT Gallery</h3>
                <p className="portfolio__description">
                  A gallery to show off minted NFTs and ship them for selling.
                </p>
                {/* <a
                className="button button--flex button--small portfolio__button"
                href="#"
              >
                Demo
                <UilArrowRight
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__content grid">
              <Image
                src={company}
                sizes="50vw"
                alt="Company"
                className="portfolio__img"
                layout="responsive"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">SYSINFO Company website</h3>
                <p className="portfolio__description">
                  SYSINFO started it all, the home of where it all takes places.
                </p>
                <a
                  className="button button--flex button--small portfolio__button"
                  href="https://sysinfo.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <UilArrowRight
                    size="18"
                    color="#FFF"
                    className="button__icon"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="portfolio__content grid">
              <Image
                src={prime}
                sizes="50vw"
                alt="Prime"
                className="portfolio__img"
                layout="responsive"
              />
              <div className="portfolio__data">
                <h3 className="portfolio__title">Primepixels Media website</h3>
                <p className="portfolio__description">
                  When you want to capture that special moment, they are the
                  most perfect for the job.
                </p>
                <a
                  className="button button--flex button--small portfolio__button"
                  href="https://primepixelsmedia.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <UilArrowRight
                    size="18"
                    color="#FFF"
                    className="button__icon"
                  />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

const Blob = () => (
  <svg
    className="home__blob"
    viewBox="0 0 200 187"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <mask id="mask0" mask-type="alpha">
      <path
        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
      />
      <image
        className="home__blob-image"
        xlinkHref="https://www.pexels.com/photo/man-smiling-behind-wall-220453/"
      />
    </g>
  </svg>
);
