import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeader";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/animation";
import "./AboutMe.css";
import "../../App.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "私の名前はヴォン　ディン　フーと申します。ベトナムから参り、2019年から日本に来ています。中央工学校OSAKAのブリッジシステムエンジニア科２年生です。現在、学校でウェブ開発を勉強していて、将来、ウェブ開発者になりたいです。",
    highLights: {
      bullets: [
        "HTML/CSS",
        "Javascript, React JS",
        "Photoshop, Figma",
        "設計どおりのインタラクティブなフロント エンド",
        "PHP (基本)",
        "C# (基本)",
      ],
      heading: "私のスキル：",
    },
  };
  const renderHighLight = () => {
    return SCREEN_CONSTSANTS.highLights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"私について"} subHeading={"私に関するの情報"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-desc">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highLights.heading}</span>
              </div>
              {renderHighLight()}
            </div>
            <div className="about-me-options">
              <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
                <button className="btn highlighted-btn">
                  履歴書をダウンロードする
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
