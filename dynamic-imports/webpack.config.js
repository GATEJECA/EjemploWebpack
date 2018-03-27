const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');



/*
    Sí al momento de configurar el plugin colocamos Infinity como valor de minChunks:
    minChunks: Infinity
    Se crea un archivo con las dependencias en común, pero nada se guarda en el. Debemos especificar en el entry las librerías que consideremos duplicadas entre los distintos archivos entry.
    Si se quiere hacer este proceso de manera automática, podemos decirle a webpack cual es el número mínimo de apariciones entre distintos archivos entry para agregarlo al archivo vendor.

    Asignando un valor de 2 al minChunks lograría el mismo resultado visto en clases de manera automática, es decir, sin tener que definir las librerias en el entry:
    minChunks:2	//Crea el vendor sin tener que definir las librerías
    minChunks:3	//No crea el vendor, pues solo se tienen 2 archivos entry

    https://webpack.js.org/plugins/commons-chunk-plugin/

*/

module.exports = {
    entry: {
        index: ['babel-polyfill', path.resolve(__dirname, 'src/js/index.js')],
        contact: ['babel-polyfill', path.resolve(__dirname, 'src/js/contact.js')]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist') + "/",
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    module: {
        rules: [
            //aquí van los loaders
            {
                test: /\.css$/,//que tipo de archivo quiero reconocer, se usar regex
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"], se ponen los loaders que se van a encargar del archivo (tiene que ir en ese orden)
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ],
                    fallback: "style-loader" //si falla, usa este
                })
            },
            {
                test: /\.scss$/,//que tipo de archivo quiero reconocer, se usar regex
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"], se ponen los loaders que se van a encargar del archivo (tiene que ir en ese orden)
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader" //si falla, usa este
                })
            },
            {
                test: /\.styl$/,//que tipo de archivo quiero reconocer, se usar regex
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"], se ponen los loaders que se van a encargar del archivo (tiene que ir en ese orden)
                    use: ["css-loader", {
                        loader: "stylus-loader",
                        options: {
                            use: [
                                require('nib'), //con este pondrá los webkit para otros navegadores
                                require('rupture')//agrega funciones para mediaqueries
                            ],
                            import: [
                                '~nib/lib/nib/index.styl',
                                '~rupture/rupture/index.styl'
                            ]
                        }
                    }],
                    fallback: "style-loader" //si falla, usa este
                })
            },
            {
                test: /\.less$/,//que tipo de archivo quiero reconocer, se usar regex
                use: ExtractTextPlugin.extract({
                    //["style-loader", "css-loader"], se ponen los loaders que se van a encargar del archivo (tiene que ir en ese orden)
                    use: ["css-loader", {
                        loader: "less-loader",
                        options: {
                            noIeCompat: true
                        }
                    }],
                    fallback: "style-loader" //si falla, usa este
                })
            },
            {
                test: /\.js$/,//que tipo de archivo quiero reconocer, se usar regex
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.json$/,//que tipo de archivo quiero reconocer, se usar regex
                use: 'json-loader'
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,//en bytes
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css"),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json')
        })
    ]
}