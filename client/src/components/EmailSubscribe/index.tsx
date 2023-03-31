import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './module.css';
export default function EmailSubscribe() {
  const [state, handleSubmit] = useForm("xlekpgjn");
  if (state.succeeded) {
    return <p>Thanks for Signing Up!</p>;
  }
  return (
    <form className="Subscribe" onSubmit={handleSubmit}>
      Sign up here for alerts and news about TetrAI's development.<br />
      <label htmlFor="email">
        Email Address:
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Sign Up
      </button>
    </form>
  );
}