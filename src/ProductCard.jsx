function ProductCard({ product, addToCart ,delToCart }) {
    return (
      <div className="card">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description.substring(0, 100)}...</p>
        <p>Price: ${product.price}</p>
        <div className="box">
        <button onClick={addToCart}>Add to Cart</button>
        <br />
        <button onClick={delToCart}>Remove From Cart</button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  