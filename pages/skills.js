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
      <meta name="keywords" content="wandu"/>
    </Head>
    <section className="skills section">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"></span>

      <div className="skills__container container grid">
        <div>
          <div className="skills__content">
            <div className="skills__header">
              <UilBracketsCurly
                size="18"
                color="#6563FF"
                className="skills__icon"
              />
              <div>
                <h1 className="skills__titles">Frontend Developer</h1>
                <span className="skills_subtitle">More than 4+ years</span>
              </div>
            </div>
            <div className="skills__header">
              <UilSwatchbook 
                size="18"
                color="#6563FF"
                className="skills__icon"
              />
              <div>
                <h1 className="skills__titles">Designer</h1>
                <span className="skills_subtitle">More than 2+ years</span>
              </div>
            </div>
            <div className="skills__header">
              <UilServers size="18" color="#6563FF" className="skills__icon" />
              <div>
                <h1 className="skills__titles">Backend Developer</h1>
                <span className="skills_subtitle">More than 5+ years</span>
              </div>
            </div>
            <div className="skills__header">
              <UilPuzzlePiece
                size="18"
                color="#6563FF"
                className="skills__icon"
              />
              <div>
                <h1 className="skills__titles">Cobol Developer</h1>
                <span className="skills_subtitle">More than 3+ years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
