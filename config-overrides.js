const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

/* config-overrides.js */
module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        new MonacoWebpackPlugin({
            languages: ["javascript", "typescript"],
        })
    );

    return rewireReactHotLoader(config, env);
};
