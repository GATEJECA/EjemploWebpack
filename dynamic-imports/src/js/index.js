import '../css/estilos.css';
import imagen from '../images/descarga.jpg';
import { mimensaje as peluches, delayeMessage as mensajeconretardo } from './mensaje';
import data from "./teachers.json";
import React from 'react';
import { render } from 'react-dom';
import Teachers from "./componentes/teachers";
import '../css/main.less';

const button = document.getElementById('dynamic');
button.addEventListener('click', async () => {
    const { default: alerta } = await import('./alerta.js');
    alerta();
});

render(<Teachers data={data} />, document.getElementById("Container"));