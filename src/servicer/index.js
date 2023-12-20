// webpack 的require.context方法t提取模块内容
const requireApi = require.context('.', true, /.js$/);

const module = {};

requireApi.keys().forEach((key) => {
  if (key === './index.js' || './http.js') return;
  Object.assign(module, requireApi(key));
});

export default module;