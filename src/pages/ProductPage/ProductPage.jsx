import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/productService";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

/**
 * Renders the product details page.
 */
export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    async function loadProduct() {
        setIsLoading(true);
        const { data, error } = await getProduct(id);
        if (data) {
            setProduct(data);
        } else if (error) {
            setError(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        loadProduct();
    }, []);

    if (isLoading) {
        return <LoadingIndicator></LoadingIndicator>
    }

    if (error) {
        return <ErrorMessage message={error}></ErrorMessage>
    }

    return (
        <div className='flex flex-col items-center'>
            <ProductDetail product={product}></ProductDetail>
        </div>
    )

}