import React, { useState } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";
import "./styles.scss";

const ScrollableButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log("scrolled", scrolled);
    if (scrolled > 50) {
      setVisible(true);
    } else if (scrolled <= 50) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const main = document
      .getElementById("main")
      ?.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scrollable__button"
      style={{ display: visible ? "inline" : "none" }}
    >
      <IconButton aria-label="scroll up" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </IconButton>
    </div>
  );
};

export default ScrollableButton;
