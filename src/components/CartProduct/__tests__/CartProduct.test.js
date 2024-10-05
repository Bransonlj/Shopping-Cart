import { render } from "@testing-library/react";
import CartProduct from "../CartProduct";

test("Renders the CartProduct", () => {
  const product = {
    id: 1,
    title: 'dummy',
    price: 12,
    description: 'test description',
    image: 'none'
  }
  render(<CartProduct product={product} />)
  expect(true).toBeTruthy()
})
