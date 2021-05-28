//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num) => {
  let steps = 0;
  if (num === 0 || num < 0) {
    throw 'Only positive numbers are allowed';
  } else if (num === 1) {
    return 0;
  } else if (num > 1) {
    while (num > 1) {
      if (num%2 === 0) {
        num /= 2;
        steps++;
      } else {
        num = 3*num+1;
        steps++;
      }
    }
    return steps;
  }
};