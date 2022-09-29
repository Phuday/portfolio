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
  const sendForm = async (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) return;
    emailjs
      .sendForm(
        "service_14oo9tm",
        "template_320068i",
        e.target,
        "JTkCntffzY-VvTg66"
      )
      .then((res) => {
        alert(
          "連絡していただき、誠にありがとうございます。できるだけ早目にお返事しますので。少々お待ちください！"
        );
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading
        subHeading={"交流を続けてください！"}
        title={"コンタクト"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className="title">お問い合わせ 📧</h2>
          <a href="https://www.facebook.com/phusssss/" target="_blank">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/phufu_/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>ここにメールを送ってください！</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={sendForm}>
            <p>{banner}</p>
            <div className="text-field">
              <label htmlFor="name">名前：</label>
              <input
                type="text"
                name="name"
                onChange={handleName}
                value={name}
              />
            </div>

            <div className="text-field">
              <label htmlFor="email">メール：</label>
              <input
                type="email"
                name="user-email"
                onChange={handleEmail}
                value={email}
              />
            </div>

            <div className="text-field mes">
              <label htmlFor="message">メッセージ：</label>
              <textarea
                type="text"
                name="message"
                onChange={handleMessage}
                value={message}
              />
            </div>

            <div className="send-btn">
              <button type="submit">
                送信
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
