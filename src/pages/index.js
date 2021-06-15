import React from "react"
import { graphql } from "gatsby"
import { SEO, Jumbo, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku: allStripePrice {
      edges {
        node {
          id
          price: unit_amount
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

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges} />
  </>
)

export default IndexPage
