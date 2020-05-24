import React from 'react';

const SignUp: React.FC = () => (
  <div>
    <form>
      <fieldset>
        <legend>Sign Up</legend>
        <div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">submit</button>
      </fieldset>
    </form>
  </div>
);

export default SignUp;
