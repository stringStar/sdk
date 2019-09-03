import request from "../utils/request";

export async function getAuth() {
  return request("//baidu.com", {
    methods: "GET"
  });
}

export async function getUserInfo(openId, userId) {
  return request("/getUserInfo", {
    methods: "POST",
    body: {
      openId,
      userId
    }
  });
}
