import "whatwg-fetch";
import warpFunc from "./warpRequest";

const request = (url, option) => {
  const headers = {
    mode: "cors",
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  };
  const options = {
    ...option
  };
  options.headers = headers;

  return fetch(url, options).then(res => {
    if (res.code) {
      throw new Error("code");
    }
    res();
  });
};
export default warpFunc(request);
