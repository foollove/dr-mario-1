
export const addVirus = (virus) => {
	console.log('adding virus', virus);

	return {
		type: 'add-virus',
		virus
	}
}

export const addPill = (pill) => {
	console.log('adding pill', pill);

	return {
		type: 'add-pill',
		pill
	}
}

export const addHalfPill = (halfpill) => {
	console.log('adding halfpill', halfpill);

	return {
		type: 'add-halfpill',
		halfpill
	}
}

export const dropPill = (pill) => {
	return {
		type: 'drop-pill',
		pill
	}
}

export const dropHalfPill = (halfpill) => {
	return {
		type: 'drop-halfpill',
		halfpill
	}
}

export const setMode = (mode) => {
	return {
		type: 'set-mode',
		mode
	}
}

