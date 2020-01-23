const babelPresetEnv = require.resolve('@babel/preset-env');
const babelPresetReact = require.resolve('@babel/preset-react');
const babelPluginClassProperties = require.resolve('@babel/plugin-proposal-class-properties');
const babelPluginPrivateMethods = require.resolve('@babel/plugin-proposal-private-methods');
const babelPluginDecorators = require.resolve('@babel/plugin-proposal-decorators');

module.exports = function(api) {
  api.cache(true);

  const presets = [[babelPresetEnv, {targets: {node: '10.15'}, loose: true}], babelPresetReact];

  const plugins = [
    [babelPluginDecorators, {legacy: true}],
    [babelPluginClassProperties, {loose: true}],
    [babelPluginPrivateMethods, {loose: true}]
  ];

  return {presets, plugins};
};
