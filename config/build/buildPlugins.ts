/* eslint-disable @typescript-eslint/ban-ts-comment */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';



export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev } =options
    const { html } = paths

    const plugins = [
        new HtmlWebpackPlugin({template: html}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
    ]

    if (isDev) {
        //@ts-ignore
        plugins.push(new webpack.HotModuleReplacementPlugin())
        //@ts-ignore
        plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    }

    return plugins
}