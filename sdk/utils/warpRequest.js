import Hiha from "../index.js";

const warpFunc = fn => {
  return function(...args) {
    const [url, { onSuccess = false, onError = false, ...rest }] = args;
    return fn(url, ...rest)
      .then(res => {
        onSuccess && onSuccess(res);
        return res;
      })
      .catch(e => {
        onError ? onError(e) : Hiha.onError(e);
      });
  };
};

export default warpFunc;
