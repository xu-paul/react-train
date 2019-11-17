const path = require('path'); 
const HtmlWebpackPlugin =require("html-webpack-plugin");
module.exports = {  
    entry: ['./src/index.js','./src/indexbattle.js'],
    output: {    filename: 'bundle.js',    
    path: path.resolve(__dirname, 'dist')  },  
    module: {    rules: [      { test: /\.js$/, use: 'babel-loader'}    ] },
    devServer:{
         contentBase:'./dist'
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:"./public/index.html"
            }
        )
    ]

};