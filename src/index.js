import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import'./index.css';
import Firebase, { FirebaseContext } from './Components';

ReactDOM.render(

	<FirebaseContext.Provider value={new Firebase()}>
<App />
	</FirebaseContext.Provider>,
	document.getElementById('root'),
	);