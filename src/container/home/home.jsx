// Library
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import LatihanCounter from "../Pages/latihanCounter/latihan-counter";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";

// Style
import "./home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 3000);
  }

  loseCount = (newValue) => {
    console.log(newValue);
    // if (newValue >= 5) {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }
    return true;
  };

  render() {
    return (
      <Router>
        <Fragment>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/youtubecomp">YoutubeComp</Link>
              </li>
              <li>
                <Link to="/lifecyclecomp">LifeCycleComp</Link>
              </li>
              <li>
                <Link to="/latihancounter">CounterPage</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact>
            <BlogPost />
          </Route>
          <Route path="/detail-post/:postID" component={DetailPost} />
          <Route path="/youtubecomp">
            <YoutubeCompPage />
          </Route>
          <Route path="/lifecyclecomp">
            {this.state.showComponent ? (
              <LifeCycleComp
                countValue={(value) => {
                  this.loseCount(value);
                }}
              />
            ) : null}
          </Route>
          <Route path="/latihancounter">
            <LatihanCounter />
          </Route>
        </Fragment>
      </Router>
    );
  }
}

export default Home;
