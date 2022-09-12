// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let valueInYen = dollar * 142.67;
    return valueInYen;
}

const fromYenToPound = (yen) => {
    let valueinPound = yen * 0.0060;
    return valueinPound;
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};