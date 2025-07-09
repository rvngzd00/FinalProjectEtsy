import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import ProductCard from "../components/ProductCard"
import "../assets/style/Category.css"
import Product from './Product'
import { GlobalContext } from "../context/GlobalContext.jsx";
function Category() {
  // const productDet = [
  //   {
  //     id:0,
  //     category:"",
  //     sellerName: "RN SHOP",
  //     sellerRate: 3,
  //     price: 12.99,
  //     oldPrice: 13.66,
  //     discount: 20,
  //     stock: 100,
  //     styles: [
  //       { "id": 1, "value": "classic", "label": "Classic" },
  //       { "id": 2, "value": "vintage", "label": "Vintage" },
  //       { "id": 3, "value": "modern", "label": "Modern" }
  //     ],
  //     colors: [
  //       { "id": 1, "value": "red", "label": "Red" },
  //       { "id": 2, "value": "blue", "label": "Blue" },
  //       { "id": 3, "value": "green", "label": "Green" }
  //     ],
  //     productImages: [
  //       'https://i.etsystatic.com/34359091/r/il/41ff65/6162864210/il_794xN.6162864210_pcjo.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/ab5115/5924692450/il_794xN.5924692450_lhdu.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/b1ece9/5924599230/il_794xN.5924599230_43jk.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/6accfc/5924603278/il_794xN.5924603278_5l4x.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/033b66/6162876212/il_794xN.6162876212_h3h8.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/6e3c39/6210935251/il_794xN.6210935251_r3gk.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/bf2a37/6210937823/il_794xN.6210937823_skwj.jpg',
  //       'https://i.etsystatic.com/34359091/r/il/3e9b47/6162873686/il_794xN.6162873686_3bgg.jpg',
  //     ]

  //   }
  // ]
  const { category } = useParams();
  const { products } = useContext(GlobalContext);
  const filtered = products.filter(p =>
    p.category.toLowerCase() === category
  );
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
