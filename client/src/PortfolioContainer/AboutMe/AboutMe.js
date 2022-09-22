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
      "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",
    highLights: {
      bullets: [
        "Full Stack web and mobile development",
        "React and React Native",
        "Interactive Front End as per the design",
        "Interactive Front End as per the design",
      ],
      heading: "Here are a Few Highlights:",
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
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
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
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {""}
                Contact Me
              </button>
              <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
                <button className="btn highlighted-btn">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
