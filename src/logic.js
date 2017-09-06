import R from 'ramda';
import { dropPill, dropHalfPill } from './actions/bottle';
import reducer from './reducers/bottle';

function Grid(viruses, pills, halfpills) {
	this.state = {
		viruses: viruses,
		pills: pills,
		halfpills: halfpills
	};
}

Grid.prototype.occupiedCells = function () {
	var cells = x => x.getCells();

	var v = R.map(cells, this.state.viruses);
	var p = R.map(cells, this.state.pills);
	var h = R.map(cells, this.state.halfpills);

	return R.flatten([ ...v, ...p, ...h ]);
}
	
Grid.prototype.isCellEmpty = function (row, col) {
	if (row < 0) {
		return false;
	}

	var occupied = this.occupiedCells();

	return ! R.any(cell => cell.row === row && cell.col === col, occupied);
}

Grid.prototype.dropPill = function (pill) {
	var dp = dropPill(pill);
	var s = reducer(this.state, dp); 

	this.state.pills = s.pills;
}

Grid.prototype.dropHalfpill = function (halfpill) {
	var dp = dropHalfPill(halfpill);
	var s = reducer(this.state, dp);

	this.state.halfpills = s.halfpills;
}

Grid.prototype.pillsOnRow = function (row) {
	return R.filter(p => p.row === row, this.state.pills);
}

Grid.prototype.halfpillsOnRow = function (row) {
	return R.filter(p => p.row === row, this.state.halfpills);
}

export default Grid;
