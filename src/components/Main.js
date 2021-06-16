import React from "react";
import LeftMenu from "./LeftMenu";
import TopHeader from "./TopHeader";
import MediaPlayer from "./MediaPlayer";
import MainPage from "./MainPage";
import { BrowserRouter as Router } from "react-router-dom";
export default function Header() {
  return (
    <Router>
      <MainPage></MainPage>
    </Router>
  );
}
