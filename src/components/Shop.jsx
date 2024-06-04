import ShopDb from "../db/ShopDb"
import { Link } from "react-router-dom"
const Shop = () => {

  return (
    <main>
   <section className="shop-section">
      <h1>Our Plants</h1>
      <p className="shop-text">Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.</p>
      <div className="products">
        {ShopDb.map(product => (
          <div key={product.id} className="product">
          <Link to={`/${product.id}`}>
          <div className="product-image">
                <img src={product.image} alt={product.name} className="default-image" />
                <img src={product.image2} alt={product.name} className="hover-image" />
              </div>
            <h2>{product.name}</h2>
            <p>from ${product.price.toFixed(2)}</p>
            {product.sale && <p className="shop-sale">{product.sale}</p>}</Link>
          </div>
        ))}
      </div>
    </section>
    </main>
  )
}

export default Shop
