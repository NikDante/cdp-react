import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import Root from './root';
import rootReducer from './reducers';
import loadInitialData from './load-data';

loadInitialData();

render(
    <Root store={createStore(rootReducer)} />,
    document.getElementById('app')
);
