const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        index: ['babel-polyfill',path.resolve(__dirname, 'index.js')]
    },
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
                    //["style-loader", "css-loader"], se ponen los loaders que se van a encargar del archivo (tiene que ir en ese orden)
                    use: "css-loader",
                    fallback: "style-loader" //si falla, usa este
                }) 
            },
            {
                test: /\.js$/,//que tipo de archivo quiero reconocer, se usar regex
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            },
            {
                test: /\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:100000,//en bytes
                    }
                }
            }
        ]
    },
    plugins: [new ExtractTextPlugin("css/[name].css")] //con [name] pone el nombre del entrypoint
}

/*
    Loaders: 
    style-loader: imprime los estilos en html
    css-loader: permirte interpretar codigo css entro de javascript,
*/