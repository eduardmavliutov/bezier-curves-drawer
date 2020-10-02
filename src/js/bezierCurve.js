export class BezierCurve {
  constructor(controlPoints) {
    this.controlPoints = controlPoints;
    this.coordinates = this.calculateCoordinates();
  }

  calculateCoordinates() {
    const coordinates = [];
    for(let t = 0; t <= 1; t += 0.05) {
      const currentCoordinates = {};
      currentCoordinates.x = this.doTheMath(this.getAllXCoordinates(), t).toFixed(2);
      currentCoordinates.y = this.doTheMath(this.getAllYCoordinates(), t).toFixed(2);
      coordinates.push(currentCoordinates);
    }
    return coordinates;
  }

  doTheMath(controlPoints, t) {
    const amount = controlPoints.length;
    switch(amount) {
      case 2: {
        const [p1, p2] = controlPoints;
        return (1 - t) * p1 + t * p2;
      }
      case 3: {
        const [p1, p2, p3] = controlPoints;
        return Math.pow(1 - t, 2) * p1 + 2 * (1 - t) * t * p2 + Math.pow(t, 2) * p3;
      }
      case 4: {
        const [p1, p2, p3, p4] = controlPoints;
        return Math.pow(1 - t, 3) * p1 + 3 * Math.pow(1 - t, 2) * t * p2 + 3 * (1 - t) * Math.pow(t, 2) * p3 + Math.pow(t, 3) * p4;
      }
    }
  }

  getAllXCoordinates() {
    return this.controlPoints.map((point) => point.x);
  }

  getAllYCoordinates() {
    return this.controlPoints.map((point) => point.y);
  }

  coordinatesToString() {
    return this.coordinates.map((coordinate) => `${coordinate.x},${coordinate.y}`).join(' ');
  }

  toHTML() {
    return `
      <polyline points="${this.coordinatesToString()}" stroke="orange" stroke-width="0.5%" fill="transparent"/>    
    `;
  }
}
