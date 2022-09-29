import React from "react";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollService from "../../utilities/ScrollService";

import "./Home.css";
import "../../App.css";

export default function Home(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
