import React from "react";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
import "../../../App.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Phu</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>Frontend Dev</h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>
          <div className="profile-options">
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
        <div className="profile-picture">
          <div className="profile-picture-bg"></div>
        </div>
      </div>
    </div>
  );
}
