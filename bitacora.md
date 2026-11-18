

===== DICIONARIO DE DATOS ======

Categoria ID -> tipo de dato Number ->ID  unico del registro , se usa para iterar entre todos los registros.

Categoria Fecha -> tipo de dato str -> Fecha de realizacion del pedido 

Categoria Cliente -> tipo de dato str -> Identificador unico del cliente que realiza la compra

Categoria Producto -> tipo de dato str -> el producto adquirido por el cliente

Categoria Ciudad -> tipo de dato str -> Ciudad en donde se realizo la venta

Categoria Cantidad -> tipo  Number -> unidades del producto 

Categoria Precio -> tipo de dato Number -> valor por el cual se realizo la venta

===== CASOS BORDE DETECTADO ======

1.)
Dato "medellin" en categoria Ciudad : el dato tiene la primera letra en minuscula mientras que los demas datos de la categoria estan con la primera letra en mayuscula , Se necesitanormalizar los datos para evitar cualquier problema.

2.)
Dato "0" en categoria Cantidad : el dato es neutral y por logica no repesenta una venta real ya que segun la informacion suministrada no se realizo la venta de ninguna cantidad lo que invalida el registro completo.

3.)
Caracteres especiales como la tilde , la eñe (ñ), la convinacion de mayusculas y minusculas puden generar iconsistencias al iterar los registros , se recomienda normalizar los datos.

