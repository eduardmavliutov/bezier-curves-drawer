export class Point {
  constructor() {
    this.isEmpty = true;
    this.x = 0;
    this.y = 0
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
    this.isEmpty = false;
  }
}
