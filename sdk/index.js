import "babel-polyfill";
import * as API from "./service/index";
// class hihasdk {
//   constructor(params) {
//     const { openId, onError = false } = params;
//     this.openId = openId;
//     this.scopes = [];
//     this.onError = onError;
//   }
//   init(params) {

//   }
//   getUserInfo(params) {
//     return API.getUserInfo({ ...params });
//   }
//   onError(e) {
//     log(e);
//     this.onError && this.onError(e);
//   }
// }

export default function hiha(opt = {}) {
  const app = createSdk();
}
// window.Hiha = hiha;
