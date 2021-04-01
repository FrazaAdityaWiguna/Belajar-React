import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

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

export default Get;
