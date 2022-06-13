import React, { useState, useEffect, useRef } from "react";
import "./contact.scss";
import { client } from "../../client";
import { Images } from "../../Constants";
import { Footer } from "../../Components";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 1.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
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
    <motion.div variants={containerVariants} exit="exit">
      <div className="contact__container">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [-50, 0] }}
          transition={{
            delay: 0.2,
          }}
          className="contact__cards--container"
        >
          <div className="contact__card">
            <img src={Images.emailLogo} alt="email" />
            <a href="mailto:hello@gmail.com">hello@gmail.com</a>
          </div>
          <div className="contact__card">
            <img src={Images.whatsappLogo} alt="tel" />
            <a href="https://wa.me/+123456789">+1 (234) 56789</a>
          </div>
        </motion.div>
        {!isFormSubmitted ? (
          <motion.form
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{
              delay: 0.4,
            }}
            className="contact__form"
            onSubmit={handleSubmit}
          >
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
          </motion.form>
        ) : (
          <div className="contact__submit-thank">
            <p>
              Thank you for getting in touch! We will contact with you soon.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </motion.div>
  );
}

export default Contact;
