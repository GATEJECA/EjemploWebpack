const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            //aquí van los loaders
            {
                test: /\.css$/,//que tipo de archivo quiero reconocer, se usar regex
                use:["style-loader","css-loader"] //que loader se va a encargar del archivo (tiene que ir en ese orden)
            }
        ]
    },
    devServer:{
        port:3000,
        open:true,
        compress:true
    }

    /*
        Dev Server:
        https://webpack.js.org/configuration/dev-server/#devserver-allowedhosts
        https://github.com/webpack/webpack-dev-middleware

        Opciones para webpacke-dev-server CLI:
        -- open: true
        esto abrirá una tab del navegador con la dirección del webpack dev server y si tienes un index.html 
        en la misma ruta donde empieza el server va a utilizar es plantilla by default.


        --content-base <file/directory/url/port>
        // — define la ruta base para los contenidos
        --quiet
        // — no mostrar salidas a la consola
        --no-info
        // — omitir la información innecesaria
        --colors
        // — añadir color a los mensajes de salida
        --no-colors
        // — no usar colores en los mensajes de salida
        --host <hostname/ip>
        // — define nombre o IP del host
        --port <number>
        // — define qué puerto usar
        --inline
        // – incorpora la webpack-dev-server runtime en el paquete
        --hot
        // — añadir el HotModuleReplacementPlugin y pasar a modo en caliente (hot).
        // — NOTA: se debe evitar la habilitación doble: por parametros en el webpack.config.js + vía CLI.
        --hot --inline
        // — similar a webpack/hot/dev-server
        --lazy
        // — no habilita la observación (watch), debe evitarse el uso con --hot.
        --https
        // — inicia el servidor webpack-dev-server sobre el protocolo HTTPS.
        // — Incluye un certificado digital auto-firmado para atender los requests.
        --cert, --cacert, --key
        // — indicar las rutas de ubicación de los archivos del certificado

        Opciones que aplican al archivo webpack.config.js:

        noInfo
        // — Omite mostrar información innecesaria en la consola
        // — Default: false
        quiet
        // — No muestra nada en la consola
        // — Default: false
        lazy
        // — Cambia al modo lazy
        // —Default: false
        filename
        // — en modo lazy: el cambio de peticiones dispara la recompilación
        // — En la mayoría de los casos funciona igual que la configuración output.filename de js.
        watchOptions.aggregateTimeout
        // — Retrasa la recompilacion luego de los cambios. El valor es en ms.
        // —Default: 300
        watchOptions.poll
        // — true: usa chequeo
        // — numero: usa el chequeo en intervalos
        // —Default: undefined
        publicPath
        // — la ruta para enlazar el middleware con el servidor.
        // — En la mayoría de los casos es la misma que la configuracion output.publicPath del js.
        headers
        // — añadir cabeceras personalizadas. i. e. { “X-Custom-Header”: “yes” }
        stats
        // —Muestra en la salida opciones estadísticas.

        Ejemplo de configuración:

        devServer: {
            contentBase: path.join(__dirname, "dist"), // Ruta por defecto: dist
            open: true, // Abre una pestaña en el navegador
            compress: true, // Comprime los archivos (gzip)
            publicPath:  “/assets/",  // Los archivos estarán disponibles en esa ruta
            stats: "errors-only", // Solo vamos a ver los mensajes que sean error.
            port: 9000// Puerto 9000
        }
    */
}

