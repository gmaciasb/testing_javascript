//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  get isEquilateral() {
    if (this.a == this.b && this.a == this.c && this.a > 0) {
      return true;
    } else {
      return false;
    }
  }

  
  get isIsosceles() {
    if (this.a == this.b || this.a == this.c || this.b == this.c) {
      if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.a !== this.b && this.a !== this.c & this.b !== this.c) {
      if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
}
