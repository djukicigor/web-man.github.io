import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Authorize from "./space/authorize"
import authorizeSpace from "../services/authorize-space"

const SpaceLayout = ({ children }) => {

  const { isAuthorized, authorize } = authorizeSpace()

  return (
    <div className="main">
      <Link to="/space"><h2>My {isAuthorized ? 'foooking' : 'fine'} space</h2></Link><br />
      {
      isAuthorized ? 
        <Link to="/space/job-scrapper">Job Scrapper</Link> :
        <Authorize authorize={(password) => authorize(password)} />
      }
      { children }
    </div> 
  )
}

export default SpaceLayout
