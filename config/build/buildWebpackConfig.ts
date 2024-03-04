import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/config'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths, isDev} = options
	const {build, entry} = paths
	
	return {
		mode: mode,
		entry: entry,
		devtool:  isDev ? 'inline-source-map' : undefined,
		output: {
			path: build,
			filename: '[name].[contenthash].js',
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolve(),
		devServer: buildDevServer(options),
		}
}