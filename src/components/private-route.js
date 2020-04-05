import React, { Component } from "react"
import { navigate } from "gatsby"
import authorizedSpace from "../services/authorize-space"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { isAuthorized } = authorizedSpace();
  if (!isAuthorized && location.pathname !== `/space`) {
    navigate("/space")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
