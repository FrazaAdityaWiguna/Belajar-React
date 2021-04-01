import Get from "./Get";
import Send from "./Send";

// Send
const postNewsBlog = (data) => Send("posts", false, data);

// GET
const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getUsers = () => Get("users", true);

const API = {
  postNewsBlog,
  getNewsBlog,
  getUsers,
};

export default API;
