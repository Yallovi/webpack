import path from 'path'
import webpack from 'webpack'


export function buildResolve(): webpack.ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js']
	}
}