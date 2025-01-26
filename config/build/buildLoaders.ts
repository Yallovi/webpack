import webpack from 'webpack'
import {BuildOptions} from "./types/config";
import { buildCssLoader } from './loaders/buildCssLoader'


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = buildCssLoader(isDev)

    const lessLoader =   {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
    }

    const svgrLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    return [
        tsLoader,
        cssLoader,
        lessLoader,
        svgrLoader,
        fileLoader
    ]
}