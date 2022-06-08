import React, { useState, useRef } from "react";
import "./contact.scss";
import { client } from "../../client";
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
    try {
      setLoading(true);
      const contact = {
        _type: "contact",
        username: formData.username,
        email: formData.email,
        message: formData.message,
      };
      const res = await client.create(contact);
      // console.log(res);
      setLoading(false);
      setIsFormSubmitted(true);
      usernameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="contact__container" style={{ marginTop: "10rem" }}>
      <div className="contact__cards--container">
        <div className="contact__card">
          <img src="email" alt="email" />
          <a href="mailto:hello@gmail.com">hello@gmail.com</a>
        </div>
        <div className="contact__card">
          <img src="tel" alt="tel" />
          <a href="tel: +0 (123) 456789">hello@gmail.com</a>
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

            <button type="submit">{loading ? "Sending..." : "Submit"}</button>
          </form>
        ) : (
          <div>
            <h1>Thank you for getting in touch!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
