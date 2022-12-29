function limpiar() {
let opcion = confirm("Si confirma, borrará el contenido de su carrito");

if (opcion) {
    cantstickers = 0;
    total = 0;
    console.clear();
    console.log("\n\n El carrito quedó vacio! Ya podés volves a empezar :) \n\n");
} else {
    console.log("\n\n El carrito no se reinició, podes seguir con tu compra :) \n\n");
}
}

function mostrar() {
console.log(
    "\n\n Tu carrito lleva en total " +
    cantstickers +
    " stickers. \n Tenes " +
    monday +
    " de monday; " +
    oni +
    " de oni, y " +
    geisha +
    " de geisha.\n El total gastado hasta el momento es de $" +
    total + "\n\n");
}

let menu,
menu2,
total = 0,
cantstickers = 0,
monday = 0,
oni = 0,
geisha = 0;

do {
menu = Number(prompt(
    "- Ingrese el numero, segun lo que desea hacer: \n \n \
        1) Comprar. \n \
        2) Mostrar carrito. \n \
        3) Borrar carrito. \n \
        0) Salir del programa"
    ));

switch (menu) {
    case 1:
    do {
        menu2 = Number(
        prompt(
            "- Elija el sticker que quiere comprar:\n\n\
                1) Monday ($350) \n \
                2) Oni ($300) \n \
                3) Geisha ($250) \n \
                0) Nada mas por ahora"
        )
        );
        switch (menu2) {
        case 1:
            total = total + 350;
            cantstickers++;
            monday++;
            console.log("\n Añadiste stickers de Monday al carrito :) \n");
            break;
        case 2:
            total = total + 300;
            cantstickers++;
            oni++;
            console.log("\n Añadiste stickers de Oni al carrito :) \n");
            break;
        case 3:
            total = total + 200;
            cantstickers++;
            geisha++;
            console.log("\n Añadiste stickers de Geisha al carrito :) \n");
            break;
        case 0:
            break;
        default:
            console.log("\n Por favor, ingresá un numero válido \n");
            break;
        }
    } while (menu2 != 0);
    break;

    case 2:
        mostrar();
    break;
    case 3:
        limpiar();
    break;
    case 0:
    break;
    default:
        console.log("\n Por favor, ingresá un numero válido \n");
    break;
  }
} while (menu != 0);

console.log(
    "\n\n\n Gracias por tu compra! \n Tu carrito quedó con un total " +
    cantstickers +
    " stickers. \n Vas a llevar " +
    monday +
    " de Monday; " +
    oni +
    " de Oni, y " +
    geisha +
    " de Geisha.\n total gastado es de $" +
    total + "\n\n");