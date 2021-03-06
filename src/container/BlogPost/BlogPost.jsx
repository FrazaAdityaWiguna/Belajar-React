import React, { Component, Fragment } from "react";
import Post from "../../component/Post/Post";
import "./BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    posts: [],
    formBlogPost: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
    isUpdate: false,
  };

  // Ambil API
  getPostAPI = () => {
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((result) => {
      // Isi content post
      this.setState({
        posts: result.data,
      });
    });
  };

  // Create template content new post
  handleFormChage = (e) => {
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timeStamp = new Date().getTime();
    if (this.state.isUpdate === false) {
      formBlogPostNew["id"] = timeStamp;
    }
    formBlogPostNew[e.target.name] = e.target.value;
    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log(this.state.formBlogPost);
      }
    );
  };

  // Kirim Post baru melalui form
  sendPostDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then(
      (result) => {
        console.log(result);
        this.setState({
          formBlogPost: {
            userId: 1,
            id: 1,
            title: "",
            body: "",
          },
        });
        this.getPostAPI();
      },
      (err) => {
        console.log("error", err);
      }
    );
  };

  // Remove Post
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((result) => {
      this.getPostAPI();
    });
  };

  // Update Post
  handleUpdate = (data) => {
    console.log("handleUpdate");
    this.setState(
      {
        formBlogPost: data,
        isUpdate: true,
      },
      () => {
        console.log(this.state.isUpdate);
      }
    );
  };

  putDataToAPI = () => {
    console.log("putDataToAPI");
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((result) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          userId: 1,
          id: 1,
          title: "",
          body: "",
        },
      });
    });
  };

  handleSubmitForm = () => {
    if (this.state.isUpdate) {
      console.log("handleSubmitForm");
      this.putDataToAPI();
    } else {
      this.sendPostDataToAPI();
    }
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <p className="section-title">Blog Post</p>
          <div className="form-add-post">
            <label htmlFor="title">Title</label>
            <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChage} />
            <label htmlFor="body">Blog Content</label>
            <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="add body content" onChange={this.handleFormChage}></textarea>
            <div className="row">
              {this.state.isUpdate ? (
                <button className="btn-submit" onClick={this.handleSubmitForm}>
                  Update
                </button>
              ) : (
                <button className="btn-submit" onClick={this.handleSubmitForm}>
                  Save
                </button>
              )}
            </div>
          </div>
          {/* Melakukan looping untuk 100 post menggunakan MAP */}
          {this.state.posts.map((post) => {
            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />;
          })}
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    this.getPostAPI();
  }
}

export default BlogPost;

// jalankan live server-json : json-server --watch db.json --port 3004
