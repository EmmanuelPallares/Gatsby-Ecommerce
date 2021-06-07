import React from "react"
import { Link } from "gatsby"
import { Jumbo } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />

    <p>
      <Link to="/gracias/">Ir a gracias</Link> <br />
      <Link to="/cancelacion/">Ir a cancelación</Link>
    </p>
  </>
)

export default IndexPage
