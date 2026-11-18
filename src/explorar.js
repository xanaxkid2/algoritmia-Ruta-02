import { ventas } from './datos.js';


// Cantidad de registros

console.log("Cantidad de registros :", ventas.length)

//Primera Venta

console.log("primera venta : " , ventas[0])

//Ultima Venta

console.log("ultima venta : " , ventas[10])

//Registro ventas posicion 4
console.log("Producto cuarta fila " + ventas[4].producto)

//Tabla completa
console.table(ventas)

