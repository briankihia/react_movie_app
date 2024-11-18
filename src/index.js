// always start by importing the 2 below
import React from 'react';
import ReactDOM from 'react-dom';
// ReactDOM.render was replaced with createRoot thus add below import
import {createRoot} from 'react-dom/client';

import App from './App';

// below is going to trigger our div with an id of root and is going to inject our entire application right inside of it

// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
