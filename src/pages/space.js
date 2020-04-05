import React from "react"
import SpaceLayout from "../components/space-layout"
import { Router } from "@reach/router"
import JobScrapper from "../components/space/job-scrapper"
import PrivateRoute from "../components/private-route"

const Space = () => (
  <SpaceLayout>
    <Router>
      <PrivateRoute path="/space/job-scrapper" component={JobScrapper} />
    </Router>
  </SpaceLayout>
)

export default Space;
