import React, { useEffect, useRef, useState } from "react";
import "./donate.scss";
import { FaCopy } from "react-icons/fa";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { Footer } from "../../Components";
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
    <>
      <div className="donate__container">
        <div className="donate__bkash--container">
          <img
            src="https://i.ibb.co/51Yjkgj/Bkash-logo-PNG1.png"
            alt="bkash-logo"
          />
          <p>
            If you are in Bangladesh{" "}
            <img src="https://i.ibb.co/WfdP3dp/bangladesh.png" alt="bd-logo" />,
            Send money through bKash. Give reference of 'DONATION'
          </p>
        </div>
        <div className="donate-info__container">
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
        </div>
        <div className="donate__wise">
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
        </div>

        <p className="donate__credit-message">
          <BsFillCreditCard2BackFill /> Soon we will integrate card payments
          through website.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
