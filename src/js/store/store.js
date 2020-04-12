
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import { forbiddenWordsMiddleware } from '../middleware/forbiddenWordsMiddleware';
import thunk from 'redux-thunk';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
	rootReducer,
	storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
