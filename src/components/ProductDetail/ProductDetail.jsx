import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductImage from "../ProductImage/ProductImage";

export default function ProductDetail({ product }) {

    const { addOneToCart } = useContext(CartContext);

    return (
        <div>
            <ProductImage src={product.image} />
            <h2>{product.title}</h2>
            <button onClick={() => addOneToCart(product.id)}>Add to Cart</button>
        </div>
    )
}