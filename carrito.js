function guardarEnCarrito(productos){
localStorage.setItem("carrito",JSON.stringify(productos));
}

function cargarEnCarrito(){
return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito(){
localStorage.removeItem("carrito");
carritoProds();
btnCarrito();
}

function vaciarMsj(){
    document.getElementById("touch").addEventListener('click', () =>Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'EL CARRITO SE HA VACIADO CON EXITO',
        showConfirmButton: false,
        timer: 1000
      }))
}

function enCarrito(id){
const carrito = cargarEnCarrito();

return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id){
    const carrito = cargarEnCarrito();

    if(enCarrito(id)){
        let aux = carrito.findIndex(item => item.id === id);
        carrito[aux].cantidad += 1;
    }
    else{
        const producto = buscarID(id);
        producto.cantidad=1;
        carrito.push(producto);
    }

    guardarEnCarrito(carrito);
    btnCarrito();
}

function eliminarProdID(id){
    const carrito = cargarEnCarrito();
    const productos = carrito.filter(item => item.id !== id);
    guardarEnCarrito(productos);
    carritoProds();
}

function buscarID(id){
const productos = cargarProductosBD();

return productos.find(item => item.id === id);
}

function contadorCarrito(){
const productos = cargarEnCarrito();

return productos.reduce((total , item )=> total += item.cantidad , 0);
}

function totalAPagar(){
    const productos = cargarEnCarrito();

    return productos.reduce((total , item )=> total += item.cantidad * item.precio , 0);
    }

function btnCarrito(){
document.getElementById("carrito").innerText = contadorCarrito();
}

function finalizado(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'PROCEDEMOS AL PAGO?',
        text: `El monto a abonar es : $${totalAPagar()}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'PAGAR',
        cancelButtonText: 'CANCELAR',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swal.fire({ html: `<h1>COMPRA EN PROCESO</h1>
          <p>A CONTINUACION SERA REDIRIGIDO</p>
          <button class="edit">${my_link}</button>`
            });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'CANCELADO',
            'PROCESO CANCELADO',
            'error'
          )
        }
      })}

      let my_link = `location.href("form.html")`;
