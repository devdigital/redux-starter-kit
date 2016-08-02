import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(baseHistory, initialState) {
    const routingMiddleware = routerMiddleware(baseHistory);

    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(routingMiddleware, thunkMiddleware, promise, createLogger()),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
