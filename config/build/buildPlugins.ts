import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import { BuildOptions } from './types/config'


export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { paths } =options
	const { html } = paths
	return [new HtmlWebpackPlugin({template: html})]
}