function carritoProds(){
    const productos = cargarEnCarrito();
    let crear = "";
    let cuenta = "";

    if (contadorCarrito() > 0){
            crear += `<table class="table">
            <tr class="text-end"><td><button id="touch" class="btn btn-dark e" onclick="vaciarCarrito()">VACIAR CARRITO</button></tr></td>
            </table>`;

        for (producto of productos){
            crear +=`<table class="table">
            <tr>
            <td class="noBorde">IMAGEN</td>
            <td class="noBorde">PRODUCTO</td>
            <td class="noBorde">CANTIDAD</td>
            <td class="noBorde">PRECIO</td>
            </tr>
            <tr>
            <td><img src=".${producto.img}" alt="${producto.nombre}" class="img-thumbnail"  width="75"></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad} X $${producto.precio} </td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-dark e" onclick="eliminarProdID(${producto.id})">Borrar</button></td>
            </tr></table>`
        }
            crear += `<table class="table"><tr>
            <td  class="text-start">TOTAL A ABONAR</td>
            <td  class="text-end"><button class="u btn ">$${totalAPagar()}</button></td></table>`
            cuenta += `<table class="table"><tr>
            <td  class="text-end t"><button class="btn btn-dark" onclick="finalizado()">FINALIZAR COMPRA</button></td></table>`
    } else{
        crear = `<div class="alert alert-warning " role="alert">CARRITO VACIO , RECUERDA AGREGAR PRODUCTOS</div>` ;
    }
        document.getElementById("mercaderia").innerHTML = crear;
        document.getElementById("pagar").innerHTML = cuenta;

    }

carritoProds();
vaciarMsj();

