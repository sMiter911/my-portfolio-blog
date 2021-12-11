import Head from "next/head";
import Image from "next/image";
import omelette from '../public/omelette-removebg_edit.png'
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  UilTwitter,
  UilFacebookF,
  UilInstagram,
  UilLinkedin,
  UilGithub,
  UilMessage,
} from "@iconscout/react-unicons";

export default function Home() {
  return (
    <>
    <Head>
      <title>Wandu | Home</title>
      <meta name="keywords" content="wandu"/>
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
            <a href="https://github.com/sMiter911" className="home_social_icon">
              <UilGithub size="18" color="#6563FF" />
            </a>
          </div>

          <div className="home__img image">
            <Image src={omelette} width={550} alt='speciality' />
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
                <UilMessage
                  size="18"
                  color="#FFF"
                  className="button__icon"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
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
      <image className="home__blob-image" xlinkHref="https://www.pexels.com/photo/man-smiling-behind-wall-220453/" />
    </g>
  </svg>
);
