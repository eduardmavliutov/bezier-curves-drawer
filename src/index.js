import './styles/main.css';
import { PointsPanel } from './js/pointsPanel';
import { SvgPane } from './js/svgPane';
import { ControlPointsAmountInput } from './js/controlPointsAmountInput';

const panel = new PointsPanel();
const svgPane = new SvgPane('#svg-container', panel);
const pointsAmountInput = new ControlPointsAmountInput('#points-amount-box', panel);
