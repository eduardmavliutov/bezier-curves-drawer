export class ControlPointsAmountInput {
  constructor(id, panel) {
    this.domElement = document.querySelector(id);
    this.panel = panel;
    this.init();
  }

  init() {
    this.domElement.addEventListener('change', this.onPointsAmountChange.bind(this));
  }

  onPointsAmountChange(event) {
    const {selectedIndex} = this.domElement;
    const selectedAmount = this.domElement.options[selectedIndex].value;
    this.panel.setPointsAmount(selectedAmount);
  }
}
