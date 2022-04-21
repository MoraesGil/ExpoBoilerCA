module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    overrides: [
      {
        test: fileName => !fileName.includes('node_modules'),
        plugins: [[require('@babel/plugin-proposal-class-properties'), { loose: false }]],
      },
    ],
  };
};