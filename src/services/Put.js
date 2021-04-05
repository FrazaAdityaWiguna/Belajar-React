import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Put = (Path, Root, dataPost) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${Root ? OnlineRoot : RootPath}/${Path}`, dataPost).then(
      (result) => {
        resolve(result);
      },
      (err) => {
        reject(err);
      }
    );
  });
  return promise;
};

export default Put;
