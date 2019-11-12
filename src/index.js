import React  from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import './index.css';
import App from './containers/App';
import {setCountry, setRegion, requestCountries, selectCountry} from './reducers/reducers';


const rootReducer = combineReducers({setCountry, setRegion, requestCountries, selectCountry});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));


