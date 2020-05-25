import React from 'react';
import * as firebase from 'firebase';
import { Formik, FormikHelpers } from 'formik';
// https://stackoverflow.com/questions/51152417/react-with-typescript-property-push-does-not-exist-on-type-history
import { History, LocationState } from 'history';
import { useHistory } from 'react-router-dom';

type SignInFormValues = {
  email?: string;
  password?: string;
};

type SignInFormErrors = SignInFormValues;

const firebaseEmailPasswordSubmit = async (
  { email = '', password = '' }: SignInFormValues,
  { setStatus, setSubmitting }: FormikHelpers<SignInFormValues>,
  history: History<LocationState>,
) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    setSubmitting(false);
    setStatus(null);
    history.push('/upload-sheets');
  } catch (error) {
    // We treat all codes the same, but the possible values are:
    // * 'auth/invalid-email'
    // * 'auth/user-disabled'
    // * 'auth/user-not-found'
    // * 'auth/wrong-password'
    setStatus(error.code);
  }
};

const initialValues: SignInFormValues = {
  email: 'a@a.com',
  password: 'correct horse',
};

const SignIn: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={values => {
          const errors: SignInFormErrors = {};
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          console.log(errors);
          return errors;
        }}
        onSubmit={(values, helpers) => {
          firebaseEmailPasswordSubmit(values, helpers, history);
        }}
      >
        {({ handleChange, handleSubmit, status, values }) => (
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Sign In</legend>
              <div>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </label>
              </div>
              <button type="submit">submit</button>
              {status && <p>Invalid email or password.</p>}
            </fieldset>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
