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
                precio = 250;
                break;

            case "salsa de frutilla":
                precio = 100;
                break;

            case "salsa de chocolate":
                precio = 100;
                break;
        }
        alert("esta es nuestra lista de sabores")
        let listaDeSabores = listSabores.map(
            (listSabores) => listSabores.nombre);
            alert(listaDeSabores.join(" - "));
    let sabores = prompt("que sabores de helado vas a llevar? solo puedes elegir 4")

    carrito.push({producto, sabores, precio})    //almacena la compra del usuario en el carrito
    console.log(carrito)
    } else {
        alert("no tenemos ese producto") //en caso de que elija un producto que no esta disponible
    }

    seleccion = prompt("deseas comprar algo mas?").toLowerCase();

    while(seleccion === "no"){
        alert("gracias por elegirnos!, disfruta tu compra");

        carrito.forEach((carritoFinal) => {  //almacenamos las unidades y los precios en carrito para calcular el precio final
            console.log('producto: ${carritoFinal.producto}, sabores: ${carritoFinal.sabores}, precio final por pruducto ${carritoFinal.unidades * carritoFinal.precio}')
        })
    break;
    }
}
// usamos acumuladores y ponemos el precio y unidad dentro del acumulador
const total = carrito.reduce((acc, el) => + el.precio * 1, 0)
console.log('el precio total es: ${total}');

