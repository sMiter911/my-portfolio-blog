import Head from "next/head";
import {
  UilBracketsCurly,
  UilServers,
  UilPuzzlePiece,
  UilSwatchbook,
} from "@iconscout/react-unicons";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Wandu | Skills</title>
        <meta name="keywords" content="wandu" />
      </Head>
      <section className="skills section">
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
                <span className="skills_subtitle">More than 4+ years</span>
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
                <span className="skills_subtitle">More than 4+ years</span>
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
                <span className="skills_subtitle">More than 4+ years</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
