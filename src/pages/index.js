import React from "react"
import { Link } from "gatsby"
import { Jumbo, Products } from "../components"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { node } from "prop-types"

export const query = graphql`
  query GET_DATA {
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

    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Seo title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />

      <p>
        <Link to="/gracias/">Ir a gracias</Link> <br />
        <Link to="/cancelacion/">Ir a cancelación</Link>
      </p>
    </>
  )
}

export default IndexPage
