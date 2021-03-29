import React from "react";
import "./Post.css";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="img-post" />
      </div>
      <div className="content">
        <div className="title" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </div>
        <div className="desc">{props.data.body}</div>

        <button className="btn-remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
        <button className="btn-update" onClick={() => props.update(props.data)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Post;
