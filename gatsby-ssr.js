const React = require("react")
const { CartProvider } = require("./src/utils/context")
const { GlobalStyles } = require("./src/styles")
const Layout = require("./src/components/layout")

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles>
      <Layout>{element}</Layout>
    </GlobalStyles>
  </CartProvider>
)
