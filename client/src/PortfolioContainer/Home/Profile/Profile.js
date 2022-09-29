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
              <a href="https://www.facebook.com/phusssss/" target="_blank">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/phufu_/" target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              こんにちは、 <span className="highlighted-text">フー</span>
              {""}
              と申します。
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>フロントエンド開発</h1>
            </span>
            <span className="profile-role-tagline">
              フロントエンド操作によるウェブサイト構築のコツ
            </span>
          </div>
          <div className="profile-options">
            <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn">
                履歴書をダウンロードする
              </button>
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
