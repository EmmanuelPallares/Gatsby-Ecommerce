import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function thanks() {
  return (
    <>
      <SEO title="canceled purchase" />
      <Purchase>
        <h2>
          Compra Cancelada
          <span rol="img" aria-label="emoji">
            😢
          </span>
        </h2>
        <p>Lo sentimos</p>

        <Link to="/">
          <Button>Regresar al catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
