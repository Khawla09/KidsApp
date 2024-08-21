import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
function Type() {
    //usestae
    let { category } = useParams();
    const [prodCategory, setProdCategory] = useState(null);
    const [error, setError] = useState(null);
 
    useEffect(() => {
      axios.get(`http://localhost:3005/api/products/category/${category}`)
        .then(response => {
          setProdCategory(response.data);
          console.log(response.data)
        })
        .catch(error => {
          setError("Error fetching product details.");
          console.error("There was an error fetching the product!", error);
        });
    }, [category]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!prodCategory) {
      return <div>Loading...</div>;
    }
  
  return (
<div className="product-grid"> 
  {prodCategory.products.map((elm) => (
    <div className="product-card" key={elm.id}>   
      <img src={elm.images[0]} alt={elm.name} className="category-detail-image" />
      <div className='product-info'>
        <h2>{elm.name}</h2>
        <p className='product-price'>${elm.price}</p>
        <div className="product-sizes">
          <p style={{fontWeight:"bold"}}>Ages</p>
          {elm.sizes.map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  ))}
</div>

           
  )
}

export default Type

