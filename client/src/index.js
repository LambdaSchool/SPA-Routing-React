import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import { render } from 'react-dom'

// You'll need to wrap <App /> for routing to work
render(
<Router>
<App />
</Router>
, document.getElementById('root')
); 