import "babel-polyfill";
import * as API from "./service/index";
class Hiha {
  constructor(openId) {
    this.openId = openId;
  }
  init(params) {
    return API.getAuth({ ...params });
  }
  getUserInfo(params) {
    return API.getUserInfo({ ...params });
  }

  onError() {
    console.log("Error");
  }
}

window.Hiha = Hiha;
export default Hiha;
