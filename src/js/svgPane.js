import { BezierCurve } from './bezierCurve';

export class SvgPane {
  constructor(id, panel) {
    this.domElement = document.querySelector(id);
    this.rect = this.domElement.getBoundingClientRect();
    this.panel = panel;
    this.init();
  }

  init() {
    this.domElement.addEventListener('click', this.onSvgPaneClick.bind(this));
  }

  onSvgPaneClick(event) {
    const xCoord = event.pageX - this.rect.left;
    const yCoord = event.pageY - this.rect.top;
    this.panel.addPoint(Math.round(xCoord), Math.round(yCoord));
    if(!this.panel.checkFreeSlot()) {
      this.drawBezierCurve(this.panel.points);
    }
  }

  drawBezierCurve(controlPoints) {
    const bezierCurve = new BezierCurve(controlPoints);   
    this.domElement.insertAdjacentHTML('beforeend', bezierCurve.toHTML());
    this.panel.initPoints();
  }
}
