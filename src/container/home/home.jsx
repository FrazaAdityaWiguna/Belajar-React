import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";
// import YouTubeComp from "../../component/YouTubeComp/YouTubeComp";
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component {
  // state = {
  //   showComponent: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       showComponent: false,
  //     });
  //   }, 3000);
  // }

  // loseCount = (newValue) => {
  //   console.log(newValue);
  //   if (newValue >= 5) {
  //     this.setState({
  //       showComponent: false,
  //     });
  //   }
  //   return true;
  // };

  render() {
    return (
      <div>
        {/* <YouTubeComp title="Belajar Web Development" time="10.12" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Belajar Web Development" time="10.12" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Palindrome" time="14.34" desc="Video Tutorial Fraza" />
        <YouTubeComp title="Palindrome" time="14.34" desc="Video Tutorial Fraza" />
        <YouTubeComp /> */}
        {/* <p>LifeCycleComp</p>
        <hr />
        {this.state.showComponent ? (
          <LifeCycleComp
            countValue={(value) => {
              this.loseCount(value);
            }}
          />
        ) : null} */}
        <p>BlogPost</p>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
