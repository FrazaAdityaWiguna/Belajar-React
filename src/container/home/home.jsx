// Library
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import BlogPost from "../Pages/BlogPost/BlogPost";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import LatihanCounter from "../Pages/latihanCounter/latihan-counter";
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";

// Style
import "./home.css";

// Context API
export const RootContext = createContext();
// Tempat agat bisa Context dibaca secara global
const Provider = RootContext.Provider;

class Home extends Component {
  state = {
    showComponent: true,
    totalCounter: 1,
  };

  dispatchContext = (action) => {
    if (action.type === "PLUS_COUNTER") {
      return this.setState({
        totalCounter: this.state.totalCounter + 1,
      });
    } else if (action.type === "MINUS_COUNTER") {
      if (this.state.totalCounter > 0) {
        return this.setState({
          totalCounter: this.state.totalCounter - 1,
        });
      }
    }
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
        <Provider
          value={{
            state: this.state,
            dispatchContext: this.dispatchContext,
          }}
        >
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
        </Provider>
      </Router>
    );
  }
}

export default Home;
