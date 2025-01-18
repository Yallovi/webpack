import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : '[hash:base64:8]'
                    }
                }
            },
            "sass-loader",
        ],
			
    }

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