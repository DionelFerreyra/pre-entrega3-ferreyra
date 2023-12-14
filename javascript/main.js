//    lista de productos
const productos = [
    {nombre: "1kg de helado", precio: 2000},
    {nombre: "conos helado", precio: 800},
    {nombre: "taza helado", precio: 800},
    {nombre: "jugo helado", precio: 500},
    {nombre: "postre helado", precio: 1000},
    {nombre: "batido helado", precio: 1000},
    {nombre: "conos para rellenar x5", precio: 250},
    {nombre: "salsa de frutilla", precio: 100},
    {nombre: "salsa de chocolate", precio: 100},
];
const listSabores = [
    {nombre: "frutilla"},
    {nombre: "chocolate"},
    {nombre: "menta"},
    {nombre: "naranja al agua"},
    {nombre: "orea"},
    {nombre: "tiramisu"},
    {nombre: "kit kat"},
    {nombre: "sambayon"},
    {nombre: "banana split"},
    {nombre: "dulce de leche"},
    {nombre: "flan"},
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
    let clienteNombre = prompt("Ingresa tu nombre");
    alert(clienteNombre + "!" + " " + "esta es nuestra lista de productos y precio")
    let listaDeProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio );
        alert(listaDeProductos.join(" - "));
} else if (seleccion == "no"){
    alert("te vas a perder nuestra oferta :(");
}

// si el usuario pueda elegir los productos y mientras calcular las unidades y el costo
while(seleccion != "no"){
    let producto = prompt("elegi de a un producto que vas a llevar").toLowerCase()
    let precio = 0

    if(producto == "helado" || producto == "conos healdo" || producto == "taza helado" || producto == "jugo helado" || producto == "postre helado" || producto == "batido helado" || producto == "conos para rellenar" || producto == "salsa de frutilla" || producto == "salsa de chocolate"){
        switch (producto) {
            case "helado":
                precio = 2000;
                break;

            case "cono helado":
                precio = 800;
                break;

            case "taza helado":
                precio = 800;
                break;

            case "jugo helado":
                precio = 500;
                break;

            case "postre helado":
                precio = 1000;
                break;
                
            case "batido helado":
                precio = 1000;
                break;

            case "conos para rellenar":
                precio = 250;
                break;

            case "salsa de frutilla":
                precio = 100;
                break;

            case "salsa de chocolate":
                precio = 100;
                break;
        }

    let unidades = parseInt(prompt("cauntas unidades vas a llevar?"))

    alert("esta es nuestra lista de sabores")
    let listaDeSabores = listSabores.map(
        (listSabores) => listSabores.nombre)
        alert(listaDeSabores.join(" - "))

    let sabores = prompt("que sabores de helado vas a llevar? puedes elegir hasta 4")

    //almacena la compra del usuario en el carrito //en caso de que elija un producto que no esta disponible se lo mencionamos
    carrito.push({producto, sabores, unidades, precio})    
    console.log(carrito)
    } else {
        alert("no tenemos ese producto") 
    }

    seleccion = prompt("deseas comprar algo mas?")

    while(seleccion === "no"){
        alert("gracias por elegirnos!, disfruta tu compra")
    
        

//almacenamos las unidades y los precios en carrito para calcular el precio final
        carrito.forEach((carritoFinal) => {  
            console.log(`producto: ${carritoFinal.producto}, sabores: ${carritoFinal.sabores}, unidades: ${carritoFinal.unidades}, precio final por pruducto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}
// usamos acumuladores y ponemos el precio y unidad dentro del acumulador
const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el precio total es: ${total}`);
alert("el precio total es:" + " " + "$" + total);

