import React,{useState, useEffect} from 'react'
import axios from "axios"
function Saisonal() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend API
    axios.get('http://localhost:3005/api/products')
      .then(response => {
        setProducts(response.data.products);
        console.log(products)
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  return (
    <div> 
    
      <div className="product-list">
        {products.map(product => (
          <ul key={product.id} className="product-card">
            <li> <img src={product.images[0]} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* <p>Rating: {product.rating} ({product.reviews} reviews)</p> */}</li>
           
          </ul>
        ))}
      </div></div>
  )
}

export default Saisonal