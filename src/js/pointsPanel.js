import { Point } from './point';

export class PointsPanel {
  constructor() {
    this.domElement = document.querySelector('main #points-panel');
    this.pointsAmount = 2;
    this.points = null;
    this.initPoints();
  }

  initPoints() {
    this.points = [];
    for(let i = 0; i < this.pointsAmount; i++) {
      this.points.push(new Point());
    }
  }

  pointsToHTML() {
    return `
      ${this.points.map((point, index) => {
        if(!point.isEmpty) {
          return `
            <div class="point">
              ${index + 1}: x: ${point.x}, y: ${point.y}
            </div>
          `;
        }
      }).join('')}
    `;
  }

  checkFreeSlot() {
    return this.points.some((point) => point.isEmpty);
  }

  addPoint(x, y) {
    if(this.checkFreeSlot()) {
      const point = this.getFreePoint();
      point.setCoordinates(x, y);
      this.render();
    }
  }

  getFreePoint() {
    for(let i = 0; i < this.points.length; i++) {
      if(this.points[i].isEmpty) {
        return this.points[i];
      }
    }
  }

  setPointsAmount(value) {
    this.pointsAmount = value;
    this.initPoints();
    this.render();
  }

  render() {
    this.domElement.innerHTML = this.pointsToHTML();
  }
}
