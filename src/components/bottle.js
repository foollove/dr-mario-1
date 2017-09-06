import React from 'react';
import VirusIcon from './virus';
import PillIcon from './pill';
import HalfPillIcon from './halfPill';
import Constants from '../constants';

// Holds the pills/viruses
class Bottle extends React.Component {
	render() {
		const width = (Constants.CELL_PIXELS + 1) * Constants.BOTTLE_WIDTH;
		const height = (Constants.CELL_PIXELS + 1) * Constants.BOTTLE_HEIGHT;

		const styles = {
			backgroundColor: 'white',
			border: 'solid 1px #AAA',
			width: width,
			height: height
		};

		const viruses = this.props.viruses.map((virus, index) => {
			return <VirusIcon virus={virus} key={index} />;
		});

		const pills = this.props.pills.map((pill, index) => {
			return <PillIcon pill={pill} key={index} />;
		});

		const halfpills = this.props.halfpills.map((halfpill, index) => {
			return <HalfPillIcon halfpill={halfpill} key={index} />;
		});

		return (
			<div style={styles}>
				{ viruses }
				{ pills }
				{ halfpills }
			</div>
		)
	}

}

export default Bottle;
