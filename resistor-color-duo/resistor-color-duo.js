//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 
  'white'];


export const decodedValue = ([colorA, colorB]) => {
  let valueOne = COLORS.indexOf(colorA);
  let valueTwo = COLORS.indexOf(colorB);
  let valueString = valueOne.toString() + valueTwo.toString()
  return parseInt(valueString);
};