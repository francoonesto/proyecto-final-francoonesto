const productos = [
    {id:1,nombre:"Conjunto",precio:8000,img:"./images/conjuntoazul.webp"},
    {id:2,nombre:"RemeronN",precio:4500,img:"./images/remeronnegro.webp"},
    {id:3,nombre:"RemeronB",precio:7600,img:"./images/remeronblanco.webp"},
    {id:4,nombre:"Short",precio:5000,img:"./images/shortdejean.webp"},
    {id:5,nombre:"Moonclaro",precio:12000,img:"./images/moonclar.webp"},
    {id:6,nombre:"Moonoscuro",precio:13000,img:"./images/moonoscur.webp"},
];

function guardarsProductosBD(productos){
localStorage.setItem("productos",JSON.stringify(productos))};
function cargarProductosBD(){
return JSON.parse(localStorage.getItem("productos")) || []};

guardarsProductosBD(productos)