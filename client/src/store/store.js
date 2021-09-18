import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import getCountries  from '../reducer/index'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    getCountries
})

export const store = createStore(
reducers,   
    composeEnhancers(applyMiddleware(thunk))
);