import React,{useState, useEffect} from 'react'
import axios from "axios"
import {Splide, SplideSlide} from "@splidejs/react-splide" 
import "@splidejs/react-splide/css"
import { Link } from 'react-router-dom';
import styled from "styled-components"
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
<Wrapper>
      <h3>Saisonal Picks</h3>
      <Splide  options={{
        perPage:3,
        gap: "5rem",
        arrows: false,
        pagination: true,
        drag:"free"
      }}> 
         {products.map((product)=>(

<SplideSlide key={product.id}>
             {/* div = card */}
        <Card key={product.id}> 
         {/* Link add the route to our recipes */}
          <Link to={`/products/${product._id}`}>
          <img  src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          {/* <p>{product.description}</p> */}
          <p>Price: ${product.price}</p>
      <Gradient />
      </Link>

         </Card>
      </SplideSlide>
         ))}
     </Splide>
   </Wrapper>
   
      {/* <div className="product-list">
        {products.map(product => (
          <ul key={product.id} className="product-card">
            <li key={product.id}>  <img  src={product.images[0]} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            </li> </ul>       ))}</div> */}
            {/* <p>Rating: {product.rating} ({product.reviews} reviews)</p> */}
           
         
      
      
      </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`
const Card= styled.div`
min-height: 25rem;
border-radius: 1rem;
overflow: hidden;
position: relative;

img{
border-radius: 1rem;
// position: absolute;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
}
// p{

// gap:5px;
// position: absolute;
// z-index : 10;
// left: 50%;
// bottom: 0%;
//  transform: translate(-50%, 0%);
// color: white;
// width: 100%;
// font-weight: 600;
// font-size:1rem;
// height: 40%;
// text-align: center;
// display:flex;
// justify-content: center;
// align-items: center;


// }
`
const Gradient = styled.div`
z-index: 3;
// position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`
export default Saisonal

//   )
  


