const path = require("path"); //Node.js内置模块
const VueLoaderPlugin=require('vue-loader/lib/plugin');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/main.js', //配置入口文件
    output: {
        path: path.resolve(__dirname, './dist'), //输出路径，__dirname：当前文件所在路径
        filename: 'bundle.js' //输出文件
        // publicPath: 'dist/' webpack5 asset 不需要
    },
    module: {
        rules: [
            {
                //\对点转义,$表示结尾
                test: /\.css$/,    //打包规则应用到以css结尾的文件上
                //css-loader只负责加载,style-loader负责解析样式
                //webpack读取多个loader 从右向左读
                use: ['style-loader', 'css-loader']
            },
            // 处理图片
            // {
            //   test: /\.(png|gif|jpe?g)$/i,
            //   use: {
            //     loader: "url-loader",
            //     options: {
            //       // 指定图片大小，小于该数值的图片，会被转成 base64
            //       limit: 8 * 1024, // 8 kb
            //       // [name] 是图片原来的名称
            //       // [ext] 是图片原来的后缀名
            //       name: "image/[name].[ext]",
            //       // url-loader 默认采用 ES Modules 规范进行解析，但是 html-loader 引入图片使用的是 CommonJS 规范
            //       // 解决：关闭 url-loader 默认的 ES Modules 规范，强制 url-loader 使用 CommonJS 规范进行打包
            //       esModule: false
            //     }
            //   }
            // },

            // 通过资源模块来处理图片
            {
                test: /\.(png|gif|jpe?g)$/i,
                type: 'asset',
                // 现在，webpack 将按照默认条件，自动地在 resource 和 inline 之间进行选择：
                // 小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
                // 自定义设置
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: "image/[name].[hash:8][ext]" // 单独指定 名字
                }
            },

            // 通过资源模块来处理字体
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                // use: {
                //   loader: 'file-loader',
                //   options: {
                //     name: 'fonts/[name].[ext]'
                //   }
                // }
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: "fonts/[name][hash:8][ext]" // 单独指定 名字
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                //配置vue 模板解析
                test:/\.vue$/,
                use:{
                    loader:'vue-loader'
                }
            },
        ]
    },
    resolve:{
        extensions:['.vue','.js','.css'],
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.BannerPlugin('最终版权归phoenixhell所有  MIT licence'),
        new HtmlWebpackPlugin({
            template:'index.js.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        inline: true  //是否实时监听

    }
 };