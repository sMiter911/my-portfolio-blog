import {
  UilPhone,
  UilEnvelopeEdit,
  UilLocationPinAlt,
  UilMessage,
} from "@iconscout/react-unicons";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      subject,
      message,
    };

    fetch("/api/sendgrid", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setSubmitted(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        }
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <>
      <Head>
        <title>Wandu | Contact Me</title>
        <meta name="keywords" content="wandu" />
      </Head>
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
                  value={name}
                  type="text"
                  autoComplete="name"
                  className="contact__input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact__content">
                <label className="contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  type="email"
                  autoComplete="email"
                  className="contact__input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="contact__content">
              <label className="contact__label" htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={subject}
                type="text"
                autoComplete="subject"
                className="contact__input"
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="contact__content">
              <label className="contact__label" htmlFor="message">
                Details
              </label>
              <textarea
                name="message"
                value={message}
                id="message"
                cols={0}
                rows={7}
                className="contact__input"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div>
              <a
                className="button button--flex"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Send Message
                <UilMessage size="18" color="#FFF" className="button__icon" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
