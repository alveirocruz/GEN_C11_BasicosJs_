//! Forma de hacerlo en CommonJs 
//const Usuario = require("./usuario")
import Usuario from "./usuario.js";
import Producto from "./producto.js";
import { formatearPrecio,validarEmail, calcularDescuento } from "./funciones.js";


let u1 = new Usuario("Ana", "ana@email.com");
let producto1  = new Producto("Teclado", 250000);

let u = new Usuario("Ana", "ana@email.com");

console.log(u1.saludo());
console.log(formatearPrecio(producto1.calcularTotal()));
console.log(u);
