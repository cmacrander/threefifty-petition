import React from 'react';
import { Formik } from 'formik';

type SignInFormValues = {
  email?: string;
  password?: string;
};

type SignInFormErrors = SignInFormValues;

const initialValues: SignInFormValues = {};

const SignIn: React.FC = () => (
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
      onSubmit={() => console.log('submit')}
    >
      {({ handleChange, handleSubmit, values }) => (
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
          </fieldset>
        </form>
      )}
    </Formik>
  </div>
);

export default SignIn;
