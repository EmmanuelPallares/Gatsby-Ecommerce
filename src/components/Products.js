import React from "react"
import { Link } from "gatsby"
import formatprice from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"
export default function Products({ products }) {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const unit_amount = formatprice(node.unit_amount)
          return (
            <article key={node.id}>
              <img
                src={node.product.metadata.img}
                alt={node.product.name}
              ></img>
              <p>{node.product.name}</p>
              <small>MXN {unit_amount}</small>
              <Link to={`/${node.id}`}>Comprar Ahora</Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
