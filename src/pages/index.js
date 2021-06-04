import React from "react"
import { Link } from "gatsby"
import { Jumbo } from "../components"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/gracias/">Ir a gracias</Link> <br />
      <Link to="/cancelacion/">Ir a cancelación</Link>
    </p>
  </>
)

export default IndexPage
