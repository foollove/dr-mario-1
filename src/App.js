import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import R from 'ramda';
import * as bottleActions from './actions/bottle';
import { Virus, Pill, HalfPill } from './objects';
import Bottle from './components/bottle';
import Constants from './constants';
import Logic from './logic';
import './App.css';

// https://youtu.be/ZcZG9uDsAv8?t=399
class App extends Component {
	constructor(props) {
		super(props);

		this.props.actions.addVirus(new Virus('red', 10, 2));
		this.props.actions.addVirus(new Virus('red', 11, 2));
		this.props.actions.addVirus(new Virus('red', 12, 2));
		this.props.actions.addVirus(new Virus('yellow', 9, 3));
		this.props.actions.addVirus(new Virus('blue', 8, 4));

		this.props.actions.addPill(new Pill('red', 'yellow', 2, 14, 2));

		this.props.actions.addHalfPill(new HalfPill('blue', 3, 0));
		this.props.actions.addHalfPill(new HalfPill('blue', 4, 0));
		this.props.actions.addHalfPill(new HalfPill('blue', 6, 0));
		this.props.actions.addHalfPill(new HalfPill('blue', 8, 0));
		this.props.actions.addHalfPill(new HalfPill('yellow', 0, 3));

		this.fall = this.fall.bind(this);
	}

	componentDidMount() {
		this.tick = this.tick.bind(this);
		this.ticker = setInterval(this.tick, 500);
	}

	componentWillUnmount() {
		clearInterval(this.ticker);
	}

	tick() {
		if (this.props.mode === 'falling') {
			let count = this.fall();

			if (count === 0) {
				this.props.actions.setMode('consolidating');
			}
		}
	}

	fall() {
		let count = 0;

		for (var row = 0; row < Constants.BOTTLE_HEIGHT; row++) {
			var pills = R.filter(p => p.row === row, this.props.pills);
			var i, pill, willfall;

			for (i = 0; i < pills.length; i++) {
				pill = pills[i];
				willfall = false;

				if (Logic.isCellEmpty(pill.row - 1, pill.col, this.props.viruses, this.props.pills, this.props.halfpills)) {
					willfall = true;
				}

				// If the pill is horizontal, check the cell to the below/right as well
				if (pill.rotation === 1 || pill.rotation === 3) {
					if (! Logic.isCellEmpty(pill.row - 1, pill.col + 1, this.props.viruses, this.props.pills, this.props.halfpills)) {
						willfall = false;
					}
				}

				if (willfall) {
					count++;
					this.props.actions.dropPill(pill);
				}
			}

			var halfpills = this.props.halfpills.filter(p => p.row === row);

			for (i = 0; i < halfpills.length; i++) {
				pill = halfpills[i];
				willfall = false;

				if (Logic.isCellEmpty(pill.row - 1, pill.col, this.props.viruses, this.props.pills, this.props.halfpills)) {
					willfall = true;
				}

				if (willfall) {
					count++;
					this.props.actions.dropHalfPill(pill);
				}

			}
		}

		return count;
	}

  render() {
    return (
      <div className="App">

				{ false && <button onClick={ () => this.step() }>Step</button> }

				<Bottle 
					viruses={this.props.viruses}
					pills={this.props.pills}
					halfpills={this.props.halfpills}
					/>

				<p>Mode: { this.props.mode }</p>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
	return {
		viruses: state.bottle.viruses,
		halfpills: state.bottle.halfpills,
		pills: state.bottle.pills,
		mode: state.bottle.mode
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(bottleActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
