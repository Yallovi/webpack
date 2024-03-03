import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { BuildOptions } from './types/config'
import webpack from 'webpack'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths} = options
	const {build, entry} = paths
	
	return {
		mode: mode,
		entry: entry,
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
		}
}