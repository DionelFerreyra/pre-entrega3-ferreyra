//    lista de productos
const productos = [
    {nombre: "1kg de helado", precio: 2000},
    {nombre: "2kg de helado", precio: 3800},
    {nombre: "3kg de helado", precio: 5500},
    {nombre: "4kg de helado", precio: 7300},
    {nombre: "5kg de helado", precio: 9000},
    {nombre: "6kg de helado", precio: 11000},
    {nombre: "7kg de helado", precio: 13000},
    {nombre: "8kg de helado", precio: 14500},
    {nombre: "9kg de helado", precio: 16000},
    {nombre: "10kg de helado", precio: 17000},
    {nombre: "conos para rellenar", precio: 200},
    {nombre: "salsa de frutilla", precio: 100},
    {nombre: "salsa de chocolate", precio: 100},
];
let carrito = []

//      le preguntamos al usuario si desea comprar helado
let seleccion = prompt("Hola! ¿deseas comprar helado?").toLowerCase();

// le decimos mediante un bucle que responda estrictamente si o no para ir al siguiente paso
while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion = prompt("Hola desea comprar helado si o no?")
}
// declaramos una condicion en caso de que el usuario responda que si
// creamos una variable que nos lea la constante "productos" en el orden y con los caracteres que agreguemos
if(seleccion == "si"){
    alert("esta es nuestra lista de productos y precio")
    let listaDeProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio );
        alert(listaDeProductos.join(" - "));
} else if (seleccion == "no"){
    alert("te vas a perder nuestra oferta :(");
}

// si el usuario pueda elegir los productos y mientras calcular las unidades y el costo
while(seleccion != "no"){
    let producto = prompt("elegi de a un producto que vas a llevar")
    let precio = 0

    if(producto == "1kg de helado" || producto == "2kg de helado" || producto == "3kg de helado" || producto == "4kg de helado" || producto == "5kg de helado" || producto == "6kg de helado" || producto == "7kg de helado" || producto == "8kg de helado" || producto == "9kg de helado" || producto == "10kg de helado" || producto == "conos para rellenar" || producto == "salsa de frutilla" || producto == "salsa de chocolate"){
        switch (producto) {
            case "1kg de helado":
                precio = 2000;
                break;

            case "2kg de helado":
                precio = 3800;
                break;

            case "3kg de helado":
                precio = 5500;
                break;

            case "4kg de helado":
                precio = 7300;
                break;

            case "5kg de helado":
                precio = 9000;
                break;
                
            case "6kg de helado":
                precio = 11000;
                break;

            case "7kg de helado":
                precio = 13000;
                break;

            case "8kg de helado":
                precio = 14500;
                break;

            case "9kg de helado":
                precio = 16000;
                break;

            case "10kg de helado":
                precio = 17000;
                break;

            case "conos para rellenar":
                precio = 200;
                break;

            case "salsa de frutilla":
                precio = 100;
                break;

            case "salsa de chocolate":
                precio = 100;
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})    //almacena la compra del usuario en el carrito
    console.log(carrito)
    } else {
        alert("no tenemos ese producto") //en caso de que elija un producto que no esta disponible
    }

    seleccion = prompt("deseas comprar algo mas?").toLowerCase();

    while(seleccion === "no"){
        alert("gracias por elegirnos!, disfruta tu compra");

        carrito.forEach((carritoFinal) => {  //almacenamos las unidades y los precios en carrito para calcular el precio final
            console.log('producto: ${carritoFinal.producto}, unidades: {carritoFinal.unidades}, precio final por pruducto ${carritoFinal.unidades * carritoFinal.precio}')
        })
    break;
    }
}
// usamos acumuladores y ponemos el precio y unidad dentro del acumulador
const total = carrito.reduce((acc, el) => + el.precio * el.unidades, 0);
alert("el precio total es" + " " + "$" + total);

// function sabores2() {
//     let elige2Sbores = prompt("elegi 2 sabores, las opciones son: chocolate, frutilla, menta granizada, banana split, melon, naranja");

//     if (elige2Sbores === "chocolate") {
//         alert("elegi el siguiente sabor");
//     } else {
//         alert("sabor no valido");
//     }
// }

// let cantidadPedido = Number(prompt("¿Cuántos kilos de helado vas a pedir?"));

// if (cantidadPedido < 3 ) {
//     sabores2();
// } else if (cantidadPedido < 5 ){
//     alert("tenemos esa cantidad, elegi tus sabores");
// } else if (cantidadPedido < 7){
//     alert(sabores4());
// } else if (cantidadPedido <= 10){
//     alert(sabores5);
// } else {
//     alert("no vendemos esa cantidad");
// }



// function sabores4() {
//     let sabores4 = prompt("elegi 4 sabores, las opciones son: chocolate, frutilla, menta granizada, banana split, melon, naranja");

//     if (sabores4 === "chocolate", "frutilla", "menta", "granizada", "banana", "split", "melon", "naranja") {
//         alert("elegi el seguiente sabor");
//     } else {
//         alert("sabor no valido");
//     }
// }
// function sabores5() {
//     let sabores5 = prompt("elegi 5 sabores, las opciones son: chocolate, frutilla, menta granizada, banana split, melon, naranja");

//     if (sabores5 === "chocolate", "frutilla", "menta", "granizada", "banana", "split", "melon", "naranja") {
//         alert("elegi el seguiente sabor");
//     } else {
//         alert("sabor no valido");
//     }
// }