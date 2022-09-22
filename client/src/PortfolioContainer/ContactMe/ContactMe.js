import React, { useState } from "react";
// import axios from "axios";
import emailjs from "emailjs-com";
// import { toast } from "react-toastify";
import imgBack from "../../images/mailz.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeader";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/animation";
import "./ContactMe.css";
import "../../App.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     emailjs
  //     .sendForm(
  //       "service_14oo9tm",
  //       "template_320068i",
  //       e.target,
  //       "JTkCntffzY-VvTg66"
  //     )
  //     let data = {
  //       name,
  //       email,
  //       message,
  //     };
  //     setBool(true);
  //     const res = await axios.post(`/contact`, data);
  //     if (name.length === 0 || email.length === 0 || message.length === 0) {
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBool(false);
  //     } else if (res.status === 200) {
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBool(false);

  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const sendForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_14oo9tm",
        "template_320068i",
        e.target,
        "JTkCntffzY-VvTg66"
      )
      .then((res) => {
        alert("thanks for contact");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets keep in Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Get In Touch 📧</h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={sendForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user-email"
              onChange={handleEmail}
              value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              onChange={handleMessage}
              value={message}
            />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane"></i>
                {bool ? (
                  <span className="load">
                    <img src={load1} alt={"image not found"} />
                  </span>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
