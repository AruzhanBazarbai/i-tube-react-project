const { rewireWorkboxInject, defaultInjectConfig } = require("react-app-rewire-workbox");

// хорошая альтернатива: https://dev.to/divyansh7924/customizing-workbox-with-create-react-app-1ada
// это по факту староватый костыль, сейчас можно напрямую в webpack.config.js зайти

module.exports = function override(config, env) {
  const workboxConfig = {
    ...defaultInjectConfig,
    swSrc: "./src/utils/service-worker.js",
  };
  config = rewireWorkboxInject(workboxConfig)(config, env);
  return config;
};
