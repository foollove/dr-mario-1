
function Cell(row, col) {
	this.row = row;
	this.col = col;
}

function HalfPill(color, row, col) {
	this.color = color;
	this.row = row;
	this.col = col;

	this.drop = function() {
		return new HalfPill(color, row-1, col);
	}

	this.getCells = function() {
		return [new Cell(this.row, this.col)];
	}
}

function Pill(colorLeft, colorRight, rotation, row, col) {
	this.colorLeft = colorLeft;
	this.colorRight = colorRight;
	this.rotation = rotation;
	this.row = row;
	this.col = col;

	this.drop = function() {
		return new Pill(colorLeft, colorRight, rotation, row-1, col);
	}

	this.getCells = function() {
		return [
			new Cell(this.row, this.col), 
			(this.rotation === 1 || this.rotation === 3) ?
				new Cell(this.row, this.col+1)
				: new Cell(this.row+1, this.col)
		];
	}
}

function Virus(color, row, col) {
	this.color = color;
	this.row = row;
	this.col = col;

	this.getCells = function() {
		return [new Cell(row, col) ];
	}
}

export {HalfPill, Pill, Virus};
