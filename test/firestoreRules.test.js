// Helpful resource related to testing Firestore:
// - https://github.com/firebase/quickstart-nodejs
// - https://www.youtube.com/watch?v=Rx4pVS1vPGY
// - https://firebase.google.com/docs/rules/unit-tests#differences_between_the_emulator_and_production

const { setup, teardown } = require('./firestoreHelpers');
// const { assertFails, assertSucceeds } = require('@firebase/testing');

describe('Firestore rules', () => {
  let db;

  beforeEach(async () => {
    db = await setup();
  });

  afterEach(async () => {
    await teardown();
  });
});
