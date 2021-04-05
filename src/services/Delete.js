import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Delete = (Path, Root, data) => {
  const promise = new Promise((resolve, reject) => {
    console.log(data);
    axios.delete(`${Root ? OnlineRoot : RootPath}/${Path}/${data}`).then(
      (result) => {
        resolve(result.data);
      },
      (err) => {
        reject(err);
      }
    );
  });

  return promise;
};

export default Delete;
