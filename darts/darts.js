//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {

  let x2 = Math.pow(x, 2); let y2 = Math.pow(y, 2);
  return (x2 + y2 > 25) ? (x2 + y2 > 100) ? 0 : 1 : (x2 + y2 <= 1) ? 10 : 5

};
