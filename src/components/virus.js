import React from 'react';
import Constants from '../constants';

// 24x24 icons for the viruses
import redVirus from '../assets/red-virus.png';
import yellowVirus from '../assets/yellow-virus.png';
import blueVirus from '../assets/blue-virus.png';

class VirusIcon extends React.Component {

	render() {

		// Which image asset to use for this virus
		const viruses = {
			blue: { img: blueVirus },
			red: { img: redVirus },
			yellow: { img: yellowVirus }
		};

		const virus = viruses[this.props.virus.color];

		const styles = {
			position: 'absolute',
			left: this.props.virus.col * (Constants.CELL_PIXELS+1),
			top: (Constants.BOTTLE_HEIGHT - 1 - this.props.virus.row) * (Constants.CELL_PIXELS + 1)
		};

		return (
			<img src={virus.img} style={styles} alt="Virus" />
		)
	}

}

export default VirusIcon;
