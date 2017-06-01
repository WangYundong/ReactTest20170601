/**
 * Created by BG289519 on 2017/6/1.
 */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
    devtool:'cheap-module-eval-source-map',
    entry:{
        app:[
            'webpack-hot-middleware/client',
            './src/app',
        ]
    }
}