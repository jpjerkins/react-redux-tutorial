
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { forbiddenWordsMiddleware } from '../middleware/forbiddenWordsMiddleware';

const store = createStore(
	rootReducer,
	applyMiddleware(forbiddenWordsMiddleware)
);

export default store;
