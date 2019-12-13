import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Body from "../components/body"
import { Helmet } from "react-helmet"

export default () => (
  <div className="main">
    <Helmet>
      <title>Igor Đukić</title>
    </Helmet>
    <Header />
    <Body />
    <Footer />
  </div>
)
