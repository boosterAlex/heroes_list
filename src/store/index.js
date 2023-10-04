import { createStore, combineReducers, compose } from 'redux';
import filters from '../reducers/filters';
import heroes from '../reducers/heroes';

const enhancer =
    (createStore) =>
    (...args) => {
        const store = createStore(...args);

        const oldDispatch = store.dispatch;

        store.dispatch = (action) => {
            if (typeof action === 'string') {
                return oldDispatch({ type: action });
            }
            return oldDispatch(action);
        };
        return store;
    };

const rootReducer = combineReducers({ filters, heroes });

const store = createStore(
    rootReducer,
    compose(
        enhancer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
