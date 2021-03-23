import React from "react";
import thumb from "./bigdream.png";
import "./YouTubeComp.css";

const YouTubeComp = (props) => {
  return (
    <div className="youtube-container">
      <div className="youtube-thumbnail">
        <img src={thumb} alt="thumb" />
        <p className="time">{props.time}</p>
      </div>
      <h3 className="title">{props.title}</h3>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
  title: "Title Here",
  time: "00.00",
  desc: "Description",
};

export default YouTubeComp;
