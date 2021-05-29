//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (armstrongNumber) => {

  const digits = armstrongNumber.toString().length;
  let suma = 0;
  let numberCopy = armstrongNumber;

  for (let i = 0; i < digits; i++) {
    suma += Math.pow(numberCopy % 10, digits);
    numberCopy = Math.floor(numberCopy / 10);
  }
  return suma === armstrongNumber;
};
