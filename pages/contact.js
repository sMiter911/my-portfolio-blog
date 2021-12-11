import {
  UilPhone,
  UilEnvelopeEdit,
  UilLocationPinAlt,
  UilMessage,
} from "@iconscout/react-unicons";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in Touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <UilPhone size="18" color="#6563FF" className="contact__icon" />
            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+27-83-663-4617</span>
            </div>
          </div>
          <div className="contact__information">
            <UilEnvelopeEdit
              size="18"
              color="#6563FF"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                wandumuzi.m@sysinfo.co.za
              </span>
            </div>
          </div>
          <div className="contact__information">
            <UilLocationPinAlt
              size="18"
              color="#6563FF"
              className="contact__icon"
            />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                South Africa - Johannesburg
              </span>
            </div>
          </div>
        </div>

        <form className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label className="contact__label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="name"
                className="contact__input"
              />
            </div>
          </div>
          <div className="contact__content">
            <label className="contact__label" htmlFor="project">
              What Ails You?
            </label>
            <input
              id="project"
              name="project"
              type="text"
              autoComplete="project"
              className="contact__input"
            />
          </div>
          <div className="contact__content">
            <label className="contact__label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={0}
              rows={7}
              className="contact__input"
            />
          </div>
          <div>
            <a className="button button--flex">
              Send Message
              <UilMessage
                size="18"
                color="#FFF"
                className="button__icon"
              />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
