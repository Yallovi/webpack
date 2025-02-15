import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer';
import { BuildOptions } from './types/config'
import { buildResolvers } from './buildResolvers'

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
        module: { rules: buildLoaders(options) },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}