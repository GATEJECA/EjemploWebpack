const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            //aquí van los loaders
            {
                test: /\.css$/,//que tipo de archivo quiero reconocer, se usar regex
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"],
                    use: "css-loader",
                    fallback: "style-loader"
                }) //que loader se va a encargar del archivo (tiene que ir en ese orden)
            }
        ]
    },
    plugins: [new ExtractTextPlugin("css/styles.css")]
}

/*
    Loaders: 
    style-loader: imprime los estilos en html
    css-loader: permirte interpretar codigo css entro de javascript,
*/