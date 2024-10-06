import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import cartLogo from '../../assets/shopping-cart-white.svg'
import CategoryBadge from "../CategoryBadge/CategoryBadge";

/**
 * Renders a detailed view of a product and allows the user to add the product to the cart.
 *
 * @param {Object} props - The props object.
 * @param {Object} props.product - The product object containing detailed information.
 * @param {string} props.product.image - The URL of the product image.
 * @param {string} props.product.title - The name or title of the product.
 * @param {string} props.product.category - The category of the product.
 * @param {number} props.product.price - The price of the product.
 * @param {string} props.product.description - The description of the product.
 */
export default function ProductDetail({ product }) {

    const { addOneToCart } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    function handleAddToCart() {
        addOneToCart(product.id);
        setAdded(true);
    }

    return (
        <div className='flex flex-col items-center max-w-4xl bg-white drop-shadow-sm rounded-sm p-8 gap-16'>
            <div className='flex w-full justify-around gap-8 px-4'>
                <img className='basis-1/2 size-96 p-4 ' src={product.image} alt="image not found" />
                <div className='basis-1/2 flex flex-col items-start gap-4'>
                    <h2 className='font-bold text-2xl' >{product.title}</h2>
                    <CategoryBadge label={product.category}></CategoryBadge>
                    <h2 className='font-bold text-2xl text-indigo-600'>${product.price}</h2>
                    <div className='flex gap-2 items-center'>
                        <Button onClick={handleAddToCart} image={cartLogo} label='Add to Cart' />
                        {
                            added && <span className='font-semibold text-indigo-900'>Item successfuly added!</span>
                        }
                    </div>
                </div>
            </div>
            <div className='mx-16'>
                <h2 className='font-semibold text-xl'>Product Description</h2>
                <p className='whitespace-pre-wrap text-base'>{product.description}</p>
            </div>
        </div>
    )
}