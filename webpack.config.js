const path = require('path');
/*
El entry point no requeriría de path para componer la ruta, ya que la ruta es relativa al proyecto.
Donde si requires path es para el path the output.
https://stackoverflow.com/questions/35048686/difference-between-path-resolve-and-path-join-invocation
*/
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'bundle.js'
    }
}