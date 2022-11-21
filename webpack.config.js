const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: './src/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
      'Assets': path.resolve(__dirname, './src/assets'),
      'Components': path.resolve(__dirname, './src/components'),
      'Helpers': path.resolve(__dirname, './src/helpers'),
      'Pages': path.resolve(__dirname, './pages'),
      'Styles': path.resolve(__dirname, './src/styles'),
    },
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js',
  },
};
