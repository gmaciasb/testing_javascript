//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (s) => {
  let r = '';
  let p = '';
  let n = 0;
  for (const c of s) {
    if (p !== '' && p !== c) {
      r += `${n < 2 ? '' : n.toString()}${p}`;
      n = 0;
    }
    p = c;
    n++;
  }
  
  return `${r}${n < 2 ? '' : n.toString()}${p}`;
};


export const decode = (s) => {
  let r = '';
  let n = '';
  for (const c of s) {
    if (c >= '0' && c <= '9') {
      n += c;
    }
    else {
      const x = n === '' ? 1 : parseInt(n);
      for (let i = 0; i < x; i++) { r += c; }
      n = '';
    }
  }

  return r;
};
