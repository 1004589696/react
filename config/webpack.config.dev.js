const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//生成html文件的插件
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, '../index.html'),//模板文件
    filename: 'index.html'//生成文件名
});

//独立打包css文件插件
const cssPlugin = new MiniCssExtractPlugin({
    filename: "css/[name].css",
    chunkFilename: "[id].css"
});

//压缩css文件
const optimizeCssPlugin = new OptimizeCssAssetsPlugin({
    cssProcessor: require('cssnano'), //引入cssnano配置压缩选项
    cssProcessorOptions: {
        discardComments: {removeAll: true}
    },
    canPrint: true //是否将插件信息打印到控制台
});


module.exports = {
    mode: 'development', //development  production ( 生产环境会将代码压缩 )
    entry: {//设置入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
        main: path.resolve(__dirname, "../src/index.js"),
    },
    output: {//设置出口文件
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/ // 在使用babel-loader时候一定要加上exclude,排除node_modules文件夹
            },
            // 解析css文件
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            // 解析less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
            },
            // 解析sass
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            // 编码图片
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: ['url-loader?limit=8192&name=[path][name]-[hash:6].[ext]&outputPath=img/']
            },
            // 编码字体
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            },
            // 处理html模板文件
            {
                test: /\.(htm|html)$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        cssPlugin,
        optimizeCssPlugin,
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    //webpack服务配置 基于webpack-dev-server
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"), //设置目录结构
        host: "localhost",// 服务器IP地址
        port: 3000, // 配置端口号
        inline: true, //设置为true，当源文件改变的时候会自动刷新
        hot: true, // 开启热更新
        open: true, // 自动打开浏览器
        compress: true, // 服务端压缩是否开启
    }
};
