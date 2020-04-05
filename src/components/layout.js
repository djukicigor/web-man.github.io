import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

export default ({ children }) => (
  <div className="main">
    <Helmet>
      <title>Igor Đukić</title>
    </Helmet>
    <Header />
    { children }
    <Footer />
  </div>
)
