// this is my function that sums two numbers
const sum = (a,b) => {
  return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
  // convert the given valueInEuro to dollars
  let valueInDollar = valueInEuro * 1.2;
  //return the dollar value
  return valueInDollar;
}

const fromDollarToYen = function(valuInDollor) {
  let valueInYen = valuInDollor * 127.9;
  return valueInYen
}

const fromYenToPound = function(valueInYen) {
  let valueInEuro = valueInYen * 0.8;

  return valueInEuro
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };