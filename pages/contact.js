import {
  UilPhone,
  UilEnvelopeEdit,
  UilLocationPinAlt,
  UilMessage,
} from "@iconscout/react-unicons";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  // States for contact form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    let data = {
      name,
      email,
      subject,
      message,
    };

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(name, email, subject, message);
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
                  <span className="required">*</span>
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
                {errors?.name && (
                  <p className="text__red">Name cannot be empty.</p>
                )}
              </div>
              <div className="contact__content">
                <label className="contact__label" htmlFor="email">
                  Email
                  <span className="required">*</span>
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
                {errors?.email && (
                  <p className="text__red">Email cannot be empty.</p>
                )}
              </div>
            </div>
            <div className="contact__content">
              <label className="contact__label" htmlFor="subject">
                Subject
                <span className="required">*</span>
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
              {errors?.subject && (
                <p className="text__red">Subject cannot be empty.</p>
              )}
            </div>
            <div className="contact__content">
              <label className="contact__label" htmlFor="message">
                Details
                <span className="required">*</span>
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
              {errors?.message && (
                <p className="text__red">Message body cannot be empty.</p>
              )}
            </div>
            <div>
              <a
                className="button button--flex"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                {buttonText}
                <UilMessage size="18" color="#FFF" className="button__icon" />
              </a>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text__green">
                  Thank you! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text__red">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
