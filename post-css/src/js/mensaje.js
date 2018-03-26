const waitTime = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("han pasado 3 segundos");
    }, 3000);
});

const mimensaje = () => {
    let mensaje = "mi mensaje";
    return `Hola mundo desde ${mensaje}`;
}
const delayeMessage = async () => {
    const mensaje = await waitTime;
    console.log(mensaje);
}
export { mimensaje, delayeMessage };