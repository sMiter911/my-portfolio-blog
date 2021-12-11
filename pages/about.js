import Image from "next/image";
import Head from "next/head";
import wandu from "../public/wandu_award.png";
import { UilDownloadAlt } from '@iconscout/react-unicons'

const About = () => {
  return (
    <>
    <Head>
      <title>Wandu | About</title>
      <meta name="keywords" content="wandu"/>
    </Head>
    <section className="about section">
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
            Software developer with a passion for learning and problem solving.
            I have extensive experience in working with web technologies and
            UI/UX design. I am a self-motivated individual who is always looking
            for new challenges and opportunities.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">8+</span>
              <span className="about__info-name">Years <br/> Experience</span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">Projects <br/> Completed</span>
            </div>
            <div>
              <span className="about__info-title">5+</span>
              <span className="about__info-name">Companies <br/> Worked For</span>
            </div>
          </div>

          <div className="about__buttons">
            <a className="button button--flex" href="../public/WANDUMUZI MATHUNJWA 2021_CV.pdf" download='WANDUMUZI MATHUNJWA 2021_CV.pdf'>
              Download CV
              <UilDownloadAlt size="18" color="#FFF" className="button__icon"/>
            </a>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default About;
