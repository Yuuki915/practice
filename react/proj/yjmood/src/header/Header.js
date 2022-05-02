import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import ShoppingBtn from "./ShoppingBtn";

export default function Header() {
  // const hoverNav = {
  //   OUTER: ["Cardigans", "Jackets", "Coats"],
  //   TOPS: [
  //     "Hoodies & Sweatshirts",
  //     "T-shirts & Tank Tops",
  //     "Shirts & Blouses",
  //     "Knitwears",
  //     "Vest",
  //   ],
  //   BOTTOMS: ["Jeans", "Pants", "Skirts"],
  //   MEN: ["Outer", "Tops", "Bottoms"],
  //   ACC: ["Shoes & Bags", "Jewerly", "Other Accessories"],
  //   MORE: ["Subscribers03", "Products", "My subscriptions"],
  // };

  return (
    <div className="header">
      <h1>YJMOOD</h1>
      <ShoppingBtn />
      <Navbar />
    </div>
  );
}
