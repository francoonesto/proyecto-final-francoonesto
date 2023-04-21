function nuestroStock(){
    const productos = cargarProductosBD();
    let crear = "";
        for (producto of productos){
            crear +=
                    `<div class="col-md-3">
                       <div class="card border-0">
                        <img src="${producto.img}" alt="${producto.nombre}" class="img-thumbnail" height="250" width="250">
                       <div class="card-body">
                         <p class="card-text text-start">${producto.nombre}</p>
                           <p class="text-start">$${producto.precio}</p>
                        <p class="text-start"><button class="btn btn-dark" onclick="agregarAlCarrito(${producto.id});">Agregar</button>
                       </div>
                       </div>
                       </div>`
        }
        document.getElementById("mercaderia").innerHTML = crear;
    }

nuestroStock();
btnCarrito();