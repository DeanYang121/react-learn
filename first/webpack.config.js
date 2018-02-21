var webpack = require('webpack');
var path = require('path');


module.exports = {
    context:__dirname+'/src',
    devServer:{inline:true,
                historyApiFallback:true,
                hot:true,
                progress:true,
                host:'localhost',
                port:'8081'
            },
    entry:"./js/root.js",
    module:{
        loaders:[{
            test:/\.js?$/,
            exclude:/(node_modules)/,
            loader: 'babel-loader',
            query:{
                presets: ['react','es2015'],
                plugins:['react-html-attrs'],//添加组件的插件配置
            }
        },
        //下面是添加的css的loader，也即是css模块化的配置办法，大家可以拷贝过去直接使用
        // {
        //     test: /\.css$/,
        //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]'
        // },
        //下面是使用ant-design的配置文件
        { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
    },
    output: {
        path: __dirname + '/src',
        filename: "bundle.js"
    },
    plugins:[
        new webpack.DefinePlugin({
        'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin()
        ]
};