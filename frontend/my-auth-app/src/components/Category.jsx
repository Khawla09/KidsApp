
import { GiClothes } from "react-icons/gi";
import { MdToys } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { GiSonicShoes } from "react-icons/gi";
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"

function Category() {
  return(
  <div className="category-container">
    <NavLink to={"/category/clothes"}><GiClothes />Cothes</NavLink>
    <NavLink to={"/category/toys"}> <MdToys />Toys</NavLink>
    <NavLink to={"/category/shoes"}> <GiSonicShoes />Shoes</NavLink>
  </div>) 
 
    
}


export default Category