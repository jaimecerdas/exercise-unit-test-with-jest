test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./valueConversionApp.js')
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One dolar should be 106.58 yen ", function(){
    const { fromDollarToYen } = require('./valueConversionApp.js')
    const yen = fromDollarToYen (5.5)
    const expected = 5.5/1.2 * 127.9 ; 
    expect(expected).toBe(yen);
})

test("fromYenToPound ", function(){
    const { fromYenToPound } = require('./valueConversionApp.js')
    const pound = fromYenToPound (10)
    const expected = 10/127.9 *0.8; 
    expect(expected).toBe(pound);
})

















// import the function sum from the app.js file
//const { sum } = require('./app.js');

// start your first test
//test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
   // let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
  ////  expect(total).toBe(23);
//});


// test ('descripcion', funcion anonima () =>{  
    // let declarar variable = sum (X,Y);  
    // expect(total).toBe(23);         })