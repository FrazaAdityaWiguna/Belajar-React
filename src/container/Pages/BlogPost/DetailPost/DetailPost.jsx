import axios from "axios";
import React, { Component } from "react";
import "./DetailPost.css";

export class DetailPost extends Component {
  state = {
    post: {
      title: "",
      body: "",
    },
  };

  render() {
    return (
      <React.Fragment>
        <p>Detail Post</p>
        <hr />
        <div className="detail-container">
          <p className="detail-title">{this.state.post.title}</p>
          <p className="detail-body">{this.state.post.body}</p>
        </div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    let postID = this.props.match.params.postID;
    console.log(postID);
    axios.get(`http://localhost:3004/posts/${postID}`).then((res) => {
      console.log(res);
      let post = res.data;
      this.setState({
        post: {
          title: post.title,
          body: post.body,
        },
      });
    });
  }
}

export default DetailPost;
