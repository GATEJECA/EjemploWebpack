import  {mimensaje as peluches, delayeMessage as mensajeconretardo} from './mensaje';
import imagen from './descarga.jpg';
document.write("hola mundo \n" + peluches());
console.log("hola mundo desde webpack!");
mensajeconretardo();
const img =document.createElement('img');
img.setAttribute('src',imagen);
document.body.append(img);