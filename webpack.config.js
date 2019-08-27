const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports ={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'dist/'
    },
    mode:'none',
    module:{
        rules:[
            {
                test:/\.(png|jpg)$/,
                use:['file-loader']
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new TerserPlugin()
    ]
}