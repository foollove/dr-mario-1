import { createStore } from 'redux';
import rootReducer from './reducers';

export default (initialstate) => {
	return createStore(rootReducer, initialstate);
}

