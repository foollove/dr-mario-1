import R from 'ramda';

function occupiedCells(viruses, pills, halfpills) {
	var cells = x => x.getCells();

	var v = R.map(cells, viruses);
	var p = R.map(cells, pills);
	var h = R.map(cells, halfpills);

	return R.flatten([ ...v, ...p, ...h ]);
}
	
function isCellEmpty(row, col, viruses, pills, halfpills) {
	if (row < 0) {
		return false;
	}

	var occupied = occupiedCells(viruses, pills, halfpills);

	return ! R.any(cell => cell.row === row && cell.col === col, occupied);
}

export default {
	occupiedCells, 
	isCellEmpty
}
