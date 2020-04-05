import React, { useReducer } from 'react';

const AuthorizeSpace = () => {
  const reducer = (state, action) => {
    if (action === 'test') {
      state = !!action
      window.localStorage.setItem('authorized', state)
    }
    return state
  }
  const [isAuthorized, authorize] = useReducer(reducer, window.localStorage.getItem('authorized'));

  return { isAuthorized, authorize };
}

export default AuthorizeSpace;
