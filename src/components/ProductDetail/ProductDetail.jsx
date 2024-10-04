export default function ProductDetail({ product }) {
    return (
        <div>
            <img src={product.image}></img>
            <h2>{product.title}</h2>
        </div>
    )
}