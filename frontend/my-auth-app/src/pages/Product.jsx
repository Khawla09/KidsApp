//when we click product picture it takes us to the info page of this porduct
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      axios.get(`http://localhost:3005/api/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          setError("Error fetching product details.");
          console.error("There was an error fetching the product!", error);
        });
    }, [id]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
  return (
    <div className="wrapper">
     <img src={product.images[0]} alt={product.name} className="product-detail-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button type='submit'>Add Cart</button>
    
      {/* Add more details as needed */}
            {/* <p>Rating: {product.rating} ({product.reviews} reviews)</p>  */}
            </div>
  )
}

export default Product