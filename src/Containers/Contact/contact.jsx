import React, { useState, useEffect, useRef } from "react";
import "./contact.scss";
import { client } from "../../client";

import { Footer } from "../../Components";

function Contact() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getDay()}/${date.getFullYear()}`;
    try {
      setLoading(true);
      const contact = {
        _type: "contact",
        username: formData.username,
        email: formData.email,
        message: formData.message,
        messagesent: formattedDate,
      };
      await client.create(contact);

      setLoading(false);
      setIsFormSubmitted(true);
      usernameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact__container">
        <div className="contact__cards--container">
          <div className="contact__card">
            <img src="https://i.ibb.co/6XGHchF/email-13762.png" alt="email" />
            <a href="mailto:hello@gmail.com">hello@gmail.com</a>
          </div>
          <div className="contact__card">
            <img
              src="https://i.ibb.co/FhDBFBg/whatsapp-logo-png-2263.png"
              alt="tel"
            />
            <a href="https://wa.me/+123456789">+1 (234) 56789</a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              ref={usernameRef}
              name="username"
              placeholder="Your name..."
              type="text"
              value={username}
              onChange={handleChangeInput}
              autoFocus
            />
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Your email.."
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
            <label>Message</label>
            <textarea
              ref={messageRef}
              name="message"
              placeholder="Type your message here..."
              onChange={handleChangeInput}
              value={message}
            />

            <button
              type="submit"
              disabled={
                loading ||
                !formData.username ||
                !formData.email ||
                !formData.message
              }
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        ) : (
          <div className="contact__submit-thank">
            <p>
              Thank you for getting in touch! We will contact with you soon.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Contact;
