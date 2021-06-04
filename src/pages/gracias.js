import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"

export default function gracias() {
  return (
    <>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Gracias por tu compra</p>
        <span rol="img" aria-label="emoji">
          ✔
        </span>
        <Link to="/">
          <Button>Volver a la tienda</Button>
        </Link>
      </Purchase>
    </>
  )
}
