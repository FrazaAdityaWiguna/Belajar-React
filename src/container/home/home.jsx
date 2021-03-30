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

// CONTEXT API
import GlobalProvider from "../../context/context";

class Home extends Component {
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
            {
              <LifeCycleComp
                countValue={(value) => {
                  this.loseCount(value);
                }}
              />
            }
          </Route>
          <Route path="/latihancounter">
            <LatihanCounter />
          </Route>
        </Fragment>
      </Router>
    );
  }
}

export default GlobalProvider(Home);
