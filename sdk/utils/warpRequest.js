// 支持 onSuccess 和 onError 处理结果
const warpFunc = fn => {
  return function(...args) {
    console.log(args);
    const [url, { onSuccess = false, onError = false, ...rest }] = args;
    return fn(url, rest)
      .then(res => {
        onSuccess && onSuccess(res);
        return res;
      })
      .catch(e => {
        onError ? onError(e) : window._hiha.onError(e);
      });
  };
};

export default warpFunc;
