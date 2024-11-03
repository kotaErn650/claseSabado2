const precioOriginal=1000;
const precioDescuento =15;

//si el parentesis esta vacio espor que no retorna o no llega nada
function calcularXDescuento(precioProducto, descuento){
    const resultadoDEscuento = (precioProducto * descuento )/100;
    const precioDescuento= precioProducto - resultadoDEscuento;

    return precioDescuento;
}
const preciofinal =calcularXDescuento(precioOriginal, precioDescuento)
console.log(preciofinal);