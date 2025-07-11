import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import "../assets/style/Category.css"
import { GlobalContext } from "../context/GlobalContext.jsx";
function Category() {

  const { category } = useParams();
  const { products } = useContext(GlobalContext);

  const filtered = !category || category.trim() === ""
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  return (
    <div className='container'>
      <div className="card-container">
        {
          filtered.map((card) => (
            <ProductCard key={card.id} cardDetail={card} />
          ))
        }
      </div>
    </div>
  )
}

export default Category
