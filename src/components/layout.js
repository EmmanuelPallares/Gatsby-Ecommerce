/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Content, Footer } from "../styles/components"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Ecommerce" />
    <Content>
      <main>{children}</main>
      <Footer>
        Ecommerce 2021
        <a href="https://www.emmanuelpallares.com">Papri</a>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
