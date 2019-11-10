import React  from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './containers/App';
import {setCountry, setRegion} from './reducers/reducers';


const rootReducer = combineReducers({setCountry, setRegion});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));


