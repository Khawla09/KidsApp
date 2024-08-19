import React from 'react'
import { GiClothes } from "react-icons/gi";
import { MdToys } from "react-icons/md";

function Category() {
  return (
    <div>
        <a href=""><MdToys /> Toys</a>
        <a href=""><GiClothes /> CLothes</a>
    </div>
  )
}

export default Category