import '../css/estilos.css';
import imagen from '../images/descarga.jpg';
import  {mimensaje as peluches, delayeMessage as mensajeconretardo} from './mensaje';
import video1 from '../videos/1.mp4'

document.write("hola mundo \n" + peluches());
console.log("hola mundo desde webpack!");
mensajeconretardo();
const img =document.createElement('img');
img.setAttribute('src',imagen);
document.body.append(img);
const video = document.createElement('video');
video.setAttribute('src', video1);
video.setAttribute('width', '480');
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);