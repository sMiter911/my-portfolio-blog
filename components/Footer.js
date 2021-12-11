import {
  UilFacebook,
  UilLinkedin,
  UilGithub,
  UilTwitter,
  UilInstagram,
} from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        {/* <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Wandu</h1>
            <span className="footer__subtitle">Fullstack Developer</span>
          </div>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/WanduMathunjwa"
              className="footer__social"
            >
              <UilFacebook size="18" color="#FFF" />
            </a>
            <a
              href="https://www.instagram.com/smiter911/"
              className="footer__social"
            >
              <UilInstagram size="18" color="#FFF" />
            </a>
            <a href="https://twitter.com/smiter911" className="footer__social">
              <UilTwitter size="18" color="#FFF" />
            </a>
            <a
              href="https://www.linkedin.com/in/wandumuzi-mathunjwa/"
              className="footer__social"
            >
              <UilLinkedin size="18" color="#FFF" />
            </a>
            <a href="https://github.com/sMiter911" className="footer__social">
              <UilGithub size="18" color="#FFF" />
            </a>
          </div>
        </div> */}
        <p className="footer__copy">&#169; Wandumuzi D. Mathunjwa</p>
      </div>
    </footer>
  );
};

export default Footer;
