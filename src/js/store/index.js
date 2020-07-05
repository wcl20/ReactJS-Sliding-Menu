import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "../reducers";

export default function configureStore(preloadedState) {
    const middlewares = [ logger ];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [ middlewareEnhancer ];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
