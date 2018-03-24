const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'./dist/'
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,//en bytes
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,//en bytes
                        name: "videos/[name].[hash].[ext]" //donde estarán ubicados los archivos, con [name] agarra el nombre original
                        //con [hash] pone el hash y [ext] pone la extensión
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