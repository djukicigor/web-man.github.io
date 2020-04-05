import React, { useReducer } from 'react';

const AuthorizeSpace = () => {
  const reducer = (state, action) => {
    if (action === 'test') {
      state = !!action
      typeof window !== 'undefined' && window.localStorage ? window.localStorage.setItem('authorized', state) : null
    }
    return state
  }
  const [isAuthorized, authorize] = useReducer(reducer, typeof window !== 'undefined' && window.localStorage ? window.localStorage.getItem('authorized') : null);

  return { isAuthorized, authorize };
}

export default AuthorizeSpace;
