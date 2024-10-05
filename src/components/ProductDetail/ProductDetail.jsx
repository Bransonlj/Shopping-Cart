import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import cartLogo from '../../assets/shopping-cart-white.svg'
import CategoryBadge from "../CategoryBadge/CategoryBadge";

export default function ProductDetail({ product }) {

    const { addOneToCart } = useContext(CartContext);
    const [added, setAdded] = useState(false);

    function handleAddToCart() {
        addOneToCart(product.id);
        setAdded(true);
    }

    return (
        <div class='flex flex-col items-center max-w-4xl bg-white drop-shadow-sm rounded-sm p-8 gap-16'>
            <div class='flex w-full justify-around gap-8 px-4'>
                <img class='basis-1/2 size-96 p-4 ' src={product.image} alt="image not found" />
                <div class='basis-1/2 flex flex-col items-start gap-4'>
                    <h2 class='font-bold text-2xl' >{product.title}</h2>
                    <CategoryBadge label={product.category}></CategoryBadge>
                    <h2 class='font-bold text-2xl text-indigo-600'>${product.price}</h2>
                    <div class='flex gap-2 items-center'>
                        <Button onClick={handleAddToCart} image={cartLogo} label='Add to Cart' />
                        {
                            added && <span class='font-semibold text-indigo-900'>Item successfuly added!</span>
                        }
                    </div>
                </div>
            </div>
            <div class='mx-16'>
                <h2 class='font-semibold text-xl'>Product Description</h2>
                <p class='whitespace-pre-wrap text-base'>{product.description}</p>
            </div>
        </div>
    )
}