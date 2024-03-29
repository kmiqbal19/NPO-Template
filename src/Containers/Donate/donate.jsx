import React, { useEffect, useRef, useState } from "react";
import "./donate.scss";
import { FaCopy } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
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
function Donate() {
  const [copySuccessName, setCopySuccessName] = useState("");
  const [copySuccessNumber, setCopySuccessNumber] = useState("");
  const numberCopyRef = useRef(null);
  const nameCopyRef = useRef(null);
  const handleCopyNumber = (e) => {
    numberCopyRef.current.select();
    document.execCommand("copy");
    navigator.clipboard.writeText(numberCopyRef.current.value);
    e.target.focus();
    setCopySuccessNumber("Number Copied!");
  };
  const handleCopyName = (e) => {
    nameCopyRef.current.select();
    document.execCommand("copy");

    navigator.clipboard.writeText(nameCopyRef.current.value);
    e.target.focus();
    setCopySuccessName("Name Copied!");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="donate__container">
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.4 }}
          className="donate__bkash--container"
        >
          <img
            src="https://i.ibb.co/51Yjkgj/Bkash-logo-PNG1.png"
            alt="bkash-logo"
          />
          <p>
            If you are in Bangladesh{" "}
            <img src="https://i.ibb.co/WfdP3dp/bangladesh.png" alt="bd-logo" />,
            Send money through bKash. Give reference of 'DONATION'
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.6 }}
          className="donate-info__container"
        >
          <div>
            <label>Account Name : </label>
            <input
              title="FOUNDER OF AR-RAHMAN ORG"
              disabled
              value={"Jackie Chain"}
              ref={nameCopyRef}
            />
            <button onClick={handleCopyName} title="Copy this name">
              <FaCopy />
            </button>
            <span>{copySuccessName}</span>
          </div>
          <div>
            <label>Bkash Number : </label>
            <input disabled value={"+123456789"} ref={numberCopyRef} />
            <button onClick={handleCopyNumber} title="Copy this number">
              <FaCopy />
            </button>
            <span>{copySuccessNumber}</span>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ delay: 0.8 }}
          className="donate__wise"
        >
          <p>
            Those who are outside Bangladesh, you can send money through
            TransferWise / ACE Money Transfer or any other money transfer
            services. Just select bkash wallet instead of bank transfer.
            <a href="https://youtu.be/sw9M2QZoNUM">
              {" "}
              See how to send money through TransferWise{" "}
            </a>
            It's simple!{" "}
          </p>
          <q>
            Never get tired of doing little things for others, sometimes those
            little things occupy the biggest parts of their hearts
          </q>
        </motion.div>

        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          className="donate__credit-message"
        >
          <BsFillCreditCard2BackFill /> Soon we will integrate card payments
          through website.
        </motion.p>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Donate;
