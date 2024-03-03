import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';


const config: webpack.Configuration = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
		clean: true
  },
	module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}), 
  ],
}

export default config;