// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("Two usd should be 285.34Yen", () => {
    let total = fromDollarToYen(2);
    expect(total).toBe(285.34);
})

test("Two yen should be 0.012pounds", () => {
    let total = fromYenToPound(2);
    expect(total).toBe(0.012);
})