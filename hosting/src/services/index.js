import * as firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/firestore';
import isLocalhost from 'utils/isLocalhost';
import isTesting from 'utils/isTesting';

export const SHEETS_COLLECTION = 'sheets';

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

// Initialize Performance Monitoring
// https://firebase.google.com/docs/perf-mon/get-started-web
// firebase.performance();

export const firestore = firebase.firestore();

if (isLocalhost()) {
  // Don't log these messages when running tests, it's annoying.
  if (isTesting()) {
    // eslint-disable-next-line no-console
    console.log('Connecting Firebase to local emulators.');
    // eslint-disable-next-line no-console
    console.log('Firestore emulator clears database contents when shut down.');
  }

  // Tell the Firebase app to connect to local emulators.
  // https://firebase.google.com/docs/emulator-suite/connect_and_prototype
  firestore.settings({
    host: 'localhost:6001',
    ssl: false,
  });
}
