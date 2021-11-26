import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  UilTwitter,
  UilFacebookF,
  UilInstagram,
  UilLinkedin,
  UilGithub 
} from "@iconscout/react-unicons";

export default function Home() {
  return (
    <section className="home section">
      <div className="home_container container grid">
        <div className="home__content grid">
          <div className="home_social">
            <a href="https://twitter.com/smiter911" className="home_social_icon"><UilTwitter size="18" color="#6563FF" /></a>
            <a href="https://www.facebook.com/WanduMathunjwa" className="home_social_icon"><UilFacebookF size="18" color="#6563FF" /></a>
            <a href="https://www.instagram.com/smiter911/" className="home_social_icon"><UilInstagram size="18" color="#6563FF" /></a>
            <a href="https://www.linkedin.com/in/wandumuzi-mathunjwa/" className="home_social_icon"><UilLinkedin size="18" color="#6563FF" /></a>
            <a href="https://github.com/sMiter911" className="home_social_icon"><UilGithub  size="18" color="#6563FF" /></a>
          </div>

          <div className="home__img">
          <Image  src="/public/assets/blob.svg" alt="An SVG of bg"  height={100} width={100} />
          </div>
        </div>
      </div>
    </section>
  );
}
