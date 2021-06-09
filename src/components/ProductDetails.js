import React, { useState } from "react"
import priceFormat from "../utils/PriceFormat"
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
  ColorButton
} from "../styles/Components"
import { SEO, Stars } from "./"

export default function ProductDetails({
  id,
  unit_mount,
  product: { name, metadata }
}) {
  const price = priceFormat(unit_mount)
  const [color, setColor] = useState(2)
  console.log(unit_mount)
  console.log(price)
  const [size, setSize] = useState(2)
  const [quantity, setQuantity] = useState(1)
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>MXN: {price}</b>
        <Stars />
        {metadata.wear && (
          <SizeSelect selected={color}>
            <ColorButton color="gray" onClick={() => setColor(1)}>
              {" "}
            </ColorButton>
            <ColorButton color="blue" onClick={() => setColor(2)}>
              {" "}
            </ColorButton>
            <ColorButton color="red" onClick={() => setColor(3)}>
              {" "}
            </ColorButton>
            <ColorButton color="pink" onClick={() => setColor(4)}>
              {" "}
            </ColorButton>
          </SizeSelect>
        )}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <button
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
          <input type="text" disabled value={quantity} />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QtySelect>

        <Button>Agregar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}
