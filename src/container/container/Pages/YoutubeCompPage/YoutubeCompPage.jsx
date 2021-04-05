import React, { Component, Fragment } from "react";
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp";

export class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p className="title-youtubecomp">YouTubeComp</p>
        <hr />
        <YouTubeComp title="Belajar Web Development" time="10.12" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Belajar Web Development" time="10.12" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Palindrome" time="14.34" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Palindrome" time="14.34" desc="Video Tutorial Fraza" />
        <YouTubeComp />
      </Fragment>
    );
  }
}

export default YoutubeCompPage;
