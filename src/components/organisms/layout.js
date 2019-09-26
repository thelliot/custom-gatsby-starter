import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import Header from "../atoms/header"
import "../stylesheets/main.scss"


const Layout = ({ children }) => {
  const {title} = useSiteMetadata()
  return (
    <>
      <Header siteTitle={title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
