import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <h1
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        Logo
      </h1>
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Tienda</Link>
        </MenuItem>
        <MenuItem margin>
          <Link to="https://emmanuelpallares.com">Papri</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="carrito" />
            </span>
          </Link>
          {/* <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              {siteTitle}
            </Link>
          </h1> */}
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
