import React from 'react';
import Constants from '../constants';

function segment(row, col, color) {

	const styles = {
		width: Constants.CELL_PIXELS + 'px',
		height: Constants.CELL_PIXELS + 'px',
		backgroundColor: colors[color],
		margin: 0,
		position: 'absolute',
		left: col*(Constants.CELL_PIXELS+1),
		top: ((Constants.BOTTLE_HEIGHT-1)-row)*(Constants.CELL_PIXELS+1),
		borderRadius: '5px'
	};

	return <div style={styles} />
}

class HalfPillIcon extends React.Component {

	render() {

		const seg = segment(this.props.halfpill.row, this.props.halfpill.col, this.props.halfpill.color);

		return (
			<div>
				{seg}
			</div>
		)
	}

}

const colors = {
	red: 'red',
	yellow: 'yellow',
	blue: 'blue'
}

export default HalfPillIcon;
