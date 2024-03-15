import fatorial from "./fatorial_model";

let nro = 1
let resultado = fatorial(nro);
if (nro <= 1) {
    console.log(`Fatorial de ${nro} é igual à 1`);
}
else if (nro === 2) {
    console.log(`Fatorial de ${nro} ===> ${nro} * ${nro - 1} = ${resultado}`);
}
else {
console.log(`Fatorial de ${nro} ===> ${nro} * ${nro - 1}! = ${resultado}`);
}
