import init from './initialState';

function viruses(state = [], action) {
	switch (action.type) {
		case 'add-virus':
			return [...state, action.virus];

		default:
			return state;
	}
}

function pills(state = [], action) {
	switch (action.type) {
		case 'add-pill':
			return [...state, action.pill];

		case 'drop-pill':
			var pill = action.pill;

			return state.map(
				p => (p.row === pill.row && p.col === pill.col) ?
					p.drop()
					: p);

		default:
			return state;
	}
}

function halfpills(state = [], action) {
	switch (action.type) {
		case 'add-halfpill':
			return [...state, action.halfpill];

		case 'drop-halfpill':
			var pill = action.halfpill;

			return state.map(
				p => (p.row === pill.row && p.col === pill.col) ?
					p.drop()
					: p);

		default:
			return state;
	}
}

function mode(state = init.mode, action) {
	switch (action.type) {
		case 'set-mode':
			return action.mode;

		default:
			return state;
	}
}

export default (state = init, action) => {
	return {
		viruses:   viruses(state.viruses, action),
		pills:     pills(state.pills, action),
		halfpills: halfpills(state.halfpills, action),
		mode:      mode(state.mode, action)
	};
}

