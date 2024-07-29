const btnCart = document.querySelector(".contenedor-carrito")
const contenedorproductosdelcarrito = document.querySelector(".container-productosdelcarrito")

btnCart.addEventListener("click", () =>{
    contenedorproductosdelcarrito.classList.toggle("carritoescondido")
})

const cartInfo = document.querySelector(".productosdelcarrito")
const productosEnFila = document.querySelector(".productos-fila")
const listaDeProductos = document.querySelector(".items")

let todosLosProductos = []

const valorTotal = document.querySelector(".totalpagar")
const contarProductos = document.querySelector("#cantidadProductos")

const carritoVacio = document.querySelector(".carro-vacio")
const totalCarrito = document.querySelector(".totalcarrito")
const compra = document.querySelector(".buy")
const botoncomprar = document.querySelector(".botoncompra")
const pagartodo = document.querySelector(".pagadototal")

listaDeProductos.addEventListener("click", e => {
    if(e.target.classList.contains("anadir-carrito")){
        const producto = e.target.parentElement

        const infoProducto = {
            quantity: 1,
            title: producto.querySelector("h2").textContent,
            price: producto.querySelector("p").textContent
        };

        const existe = todosLosProductos.some(producto => producto.title === infoProducto.title)
        if (existe){
            const productos = todosLosProductos.map(producto => {
                if(producto.title === infoProducto.title){
                    producto.quantity++;
                    return producto
                } else {
                    return producto
                }
            })
            todosLosProductos = [...productos]
        } else{
            todosLosProductos = [...todosLosProductos, infoProducto]
        }

        

        mostrarHTML();
    }
})

productosEnFila.addEventListener("click", (e) => {
    if(e.target.classList.contains("fa-x")){
        const producto = e.target.parentElement
        const title = producto.querySelector("p").textContent

        todosLosProductos = todosLosProductos.filter(
            producto => producto.title !== title
        )
        mostrarHTML()
    }
})

const mostrarHTML = () => {

    if(!todosLosProductos.length){
        carritoVacio.classList.remove("escondido")
        productosEnFila.classList.add("escondido")
        totalCarrito.classList.add("escondido")
        compra.classList.add("escondido")
        botoncomprar.classList.add("escondido")
    } else {
        carritoVacio.classList.add("escondido")
        productosEnFila.classList.remove("escondido")
        totalCarrito.classList.remove("escondido")
        compra.classList.remove("escondido")
        botoncomprar.classList.remove("escondido")
    }
    
    productosEnFila.innerHTML="";

    let total = 0;
    let totalDeProductos = 0;

    todosLosProductos.forEach(producto => {
        const contenedorProducto = document.createElement("div")
        contenedorProducto.classList.add("productosdelcarrito")
        
        contenedorProducto.innerHTML = `
            <div class="informaciondelproductodelcarro">
                <span class="cantidadproductocarrito">${producto.quantity}</span>
                <p class="tituloproductocarrito">${producto.title}</p>
                <span class="precioproductocarrito">${producto.price}</span>
            </div>
            <i class="fa-solid fa-x"></i>
        `
        productosEnFila.append(contenedorProducto)
        
        total = total + parseInt(producto.quantity * producto.price.slice(1));
        totalDeProductos = totalDeProductos + producto.quantity;
    })

    valorTotal.innerText = `$${total}`;
    contarProductos.innerText = totalDeProductos
    pagartodo.innerText = `$${total}`;
}
const pantallacompra = document.querySelector(".pantalladecompra")
const cerrarpantalla = document.querySelector(".fa-xmark")

botoncomprar.addEventListener("click", e => {
    pantallacompra.classList.remove("esconder")
})
cerrarpantalla.addEventListener("click", e =>{
    pantallacompra.classList.add("esconder")
    })