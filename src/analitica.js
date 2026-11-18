
const ventas = require('./datos.js');


function valorVenta(venta) {
    const totalVenta = venta.cantidad * venta.precio
    console.log("valor venta :", totalVenta)
    return totalVenta
}



function totalVentas(ventas) {
    let totalVendido = 0


    for (const venta of ventas) {
        totalVendido += venta.cantidad * venta.precio;

    }

    console.log("Total vendido:", totalVendido);
    return totalVendido
}

function unidadesVendidas(ventas) {
    let totalUnidades = 0
    for (const unidades of ventas) {
        totalUnidades += unidades.cantidad

    }

    console.log("cantidad:", totalUnidades)
}

function obtenerVentaMayor(ventas) {
    if (!ventas || ventas.length === 0) return null;

    let ventaMayor = ventas[0];
    let mayorTotal = valorVenta(ventaMayor)

    for (const venta of ventas) {

        const totalActual = valorVenta(venta);

        if (totalActual > mayorTotal) {
            mayorTotal = totalActual;
            ventaMayor = venta;
        }
    }

    return ventaMayor;
}

function ticketPromedio(ventas) {
    if (!ventas || ventas.length === 0) return 0;

    let acumuladoTotal = 0;
    let ventasValidas = 0;

    for (const venta of ventas) {

        if (venta.cantidad === 0) {
            continue;
        }

        acumuladoTotal += valorVenta(venta);

        ventasValidas++;
    }

    const promedio = acumuladoTotal / ventasValidas;

    console.log("El ticket promedio sin 0 es:", promedio);
    return promedio;
}

ticketPromedio(ventas)

function ventasPorCiudad(ventas, ciudad) {
    return ventas
        .filter(v => v.ciudad.trim().toLowerCase() === ciudad.trim().toLowerCase())
        .reduce((total, v) => total + v.venta, 0);
}