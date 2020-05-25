import React from 'react';
import * as firebase from 'firebase';
import { Formik, FormikHelpers } from 'formik';

type SignUpFormValues = {
  email?: string;
  password?: string;
};

type SignUpFormErrors = SignUpFormValues;

const firebaseEmailPasswordSubmit = async (
  { email = '', password = '' }: SignUpFormValues,
  { setStatus, setSubmitting }: FormikHelpers<SignUpFormValues>,
) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    setSubmitting(false);
    setStatus(null);
  } catch (error) {
    // We treat all codes the same, but the possible values are:
    // * 'auth/email-already-in-use'
    // * 'auth/invalid-email'
    // * 'auth/operation-not-allowed'
    // * 'auth/weak-password'
    setStatus(error.code);
  }
};

const initialValues: SignUpFormValues = {
  email: 'a@a.com',
  password: 'correct horse',
};

const SignUp: React.FC = () => (
  <div>
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors: SignUpFormErrors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        console.log(errors);
        return errors;
      }}
      onSubmit={firebaseEmailPasswordSubmit}
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
            {status === 'auth/email-already-in-use' ? (
              <p>
                There is already an account with that email address. Trying
                signing in instead.
              </p>
            ) : status === 'auth/invalid-email' ? (
              <p>invalid email</p>
            ) : status === 'auth/operation-not-allowed' ? (
              <p>operation not allowed</p>
            ) : status === 'auth/weak-password' ? (
              <p>Not a strong enough password.</p>
            ) : null}
          </fieldset>
        </form>
      )}
    </Formik>
  </div>
);

export default SignUp;
