import React from 'react';
import Constants from '../constants';

// The left/right ends' coordinates are adjusted based on the rotation (0..3)
var left = [
	[0, 0],
	[0, 0],
	[0, 1],
	[1, 0]
]

var right = [
	[0, 1],
	[1, 0],
	[0, 0],
	[0, 0]
]

function segment(row, col, color) {

	const styles = {
		width: '24px',
		height: '24px',
		backgroundColor: colors[color],
		margin: 0,
		position: 'absolute',
		left: col*(Constants.CELL_PIXELS + 1),
		top: (Constants.BOTTLE_HEIGHT - 1 - row)*(Constants.CELL_PIXELS + 1),
		borderRadius: '5px'
	};

	return <div style={styles} />
}

class PillIcon extends React.Component {

	render() {

		const r = this.props.pill.rotation - 1;
		
		const leftRow  = this.props.pill.row + left[r][0];
		const leftCol  = this.props.pill.col + left[r][1];
		const rightRow = this.props.pill.row + right[r][0];
		const rightCol = this.props.pill.col + right[r][1];

		const leftSegment  = segment(leftRow,  leftCol,  this.props.pill.colorLeft);
		const rightSegment = segment(rightRow, rightCol, this.props.pill.colorRight);

		return (
			<div>
				{leftSegment}
				{rightSegment}
			</div>
		)
	}

}

const colors = {
	red: 'red',
	yellow: 'yellow',
	blue: 'blue'
}

export default PillIcon;
