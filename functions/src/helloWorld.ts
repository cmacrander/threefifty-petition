import * as functions from 'firebase-functions';

const helloWorld = functions.https.onRequest((req, res) => {
  console.log('wassup'); //
});

export default helloWorld;
