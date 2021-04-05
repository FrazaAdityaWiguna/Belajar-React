import Get from "./Get";
import Send from "./Send";
import Delete from "./Delete";
import Put from "./Put";

// Send
const postNewsBlog = (data) => Send("posts", false, data);

// Put
const putNewBlog = (dataID, dataPost) => Put(`posts/${dataID}`, false, dataPost);

// Delete
const deletePost = (data) => Delete("posts", false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getUsers = () => Get("users", true);

const API = {
  postNewsBlog,
  deletePost,
  putNewBlog,
  getNewsBlog,
  getUsers,
};

export default API;
