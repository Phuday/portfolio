import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeader";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/animation";
import "./Resume.css";
import "../../App.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animation.animation.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "教育", logoSrc: "education.svg" },
    { label: "職歴　(アルバイト)", logoSrc: "work-history.svg" },
    { label: "プログラミングスキル", logoSrc: "programming-skills.svg" },
    { label: "プロジェクト", logoSrc: "projects.svg" },
    { label: "趣味", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "Sass", ratingPercentage: 70 },
    { skill: "GlupJs", ratingPercentage: 85 },
    { skill: "PugJs", ratingPercentage: 85 },
    { skill: "PHP", ratingPercentage: 50 },
    { skill: "C#", ratingPercentage: 55 },
  ];

  const projectsDetails = [
    {
      title: "全てのプロジェクトはGithubにアップロードしています。",
      duration: { fromDate: "2022", toDate: "2022" },
      subHeading: "使用テクノロジー: React JS, Bootsrap, Sass,...",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container " key="education">
      <ResumeHeading
        heading={"JIN東京日本語学校OSAKA校"}
        subHeading={"日本語学校。"}
        fromDate={"2019"}
        toDate={"2021"}
      />

      <ResumeHeading
        heading={"中央工学校OSAKA"}
        subHeading={"ブリッジシステムエンジニア科。"}
        fromDate={"2021"}
        toDate={"2023"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"ライフ大阪平林総合物流センター"}
          subHeading={""}
          fromDate={"5/2019"}
          toDate={"現在"}
        />
        <ResumeHeading
          heading={"株式会社　鳥貴族"}
          subHeading={"ホール、キーチン。"}
          fromDate={"10/2022"}
          toDate={"現在"}
        />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
      <div>
        <span>
          <strong>・Githubのリンク：</strong>
        </span>
        <a href="https://github.com/Phuday" target="_blank">
          https://github.com/Phuday
        </a>
      </div>
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="コーヒー"
        description="コーヒーはリラックスとストレス解消に役立つ飲み物です。仕事に集中しやすいです。"
      />
      <ResumeHeading
        heading="音楽"
        description="心地よい音楽を聴くことは決して妥協できないことです.Spotifyのポップソングチャートをざっと見ることは、私が手に入れることができる最高のストレス解消剤である場合があります."
      />
      <ResumeHeading
        heading="対戦ゲーム"
        description="MOBAの試合に出場したり、ランクを押し上げたり、インタラクティブなゲームセッションを行ったりしながら、反射神経を大いに刺激するのが好きです。"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"履歴"} subHeading={"私の正式な略歴の詳細"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
