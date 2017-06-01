/**
 * Created by BG289519 on 2017/6/1.
 */
var path = require('path');
var _dirname = '';
module.exports = {
    entry:'src/app.js',
    output:{
        path:path.join(_dirname,'./build'),
        filename:'app.bundle.js',
        publicPath:'/build/',
    },
    module:{
        loaders:[{
            test:/\.js$/,
            include:path.join(_dirname,'./src'),
            loader:'babel',
        }],
    },
}