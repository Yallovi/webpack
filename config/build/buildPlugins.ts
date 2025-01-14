import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from "mini-css-extract-plugin";



export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { paths, isDev } =options
	const { html } = paths
	return [
		new HtmlWebpackPlugin({template: html}),
		new MiniCssExtractPlugin({filename: 'css/[name].[contenthash:8].css', chunkFilename: 'css/[name].[contenthash:8].css'}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev)
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}