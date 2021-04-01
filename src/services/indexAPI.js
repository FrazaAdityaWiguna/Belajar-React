import axios from "axios";

const RootPath = "http://localhost:3004";
const OnlineRoot = "https://jsonplaceholder.typicode.com";

const Get = (path, root) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${root ? OnlineRoot : RootPath}/${path}`).then(
      (result) => {
        // Isi content post
        console.log(result, "promise");
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getUsers = () => Get("users", true);

const API = {
  getNewsBlog,
  getUsers,
};

export default API;
