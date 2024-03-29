const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map', // 'eval-source-map
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            options: {
                    presets: ['@babel/preset-env'],
                },
            }
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack POC',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ],
}