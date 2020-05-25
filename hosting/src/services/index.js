import * as firebase from 'firebase/app';
import 'firebase/performance';
import 'firebase/firestore';
import isLocalhost from 'utils/isLocalhost';
import isTesting from 'utils/isTesting';

export const RESPONSES_COLLECTION = 'responses';
export const ANSWERS_COLLECTION = 'answers';

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
