const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        home:path.resolve(__dirname, 'src/js/index.js'),
        precios:path.resolve(__dirname, 'src/js/precios.js'),
        contactos:path.resolve(__dirname, 'src/js/contactos.js')
    },
    output: {
        filename: 'js/[name].js',
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