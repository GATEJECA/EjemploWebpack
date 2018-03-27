const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        modules: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library:"[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name:"[name]",
            path:path.join(__dirname,"[name]-manifest.json")
        })
    ]
}