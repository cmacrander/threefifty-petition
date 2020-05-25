import * as firebase from 'firebase';
import { History, LocationState } from 'history';

export const handleSignOutClick = async (history: History<LocationState>) => {
	console.log('sign out');

	try {
		await firebase.auth().signOut();
		history.push('/');
	} catch (error) {
		console.error('Error on sign out.');
		console.error(error);
	}
};
