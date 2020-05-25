// Internet Explorer 11 Support
// https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
import App from './App';
import isDevelopment from 'utils/isDevelopment';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

if (!isDevelopment()) {
}

const firebaseConfig = {
	apiKey: 'AIzaSyCEUe4cPuUcHXhrVLMqJVZZfGtE_VUBJko',
	authDomain: 'threefifty-petition.firebaseapp.com',
	databaseURL: 'https://threefifty-petition.firebaseio.com',
	projectId: 'threefifty-petition',
	storageBucket: 'threefifty-petition.appspot.com',
	messagingSenderId: '1051000028249',
	appId: '1:1051000028249:web:2593d692fb9e65e88a4548',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
