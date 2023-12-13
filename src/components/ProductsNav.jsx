import React from "react";
import { Link } from "react-router-dom";

function ProductsNav() {
  return (
    <nav className="products-nav">
      <ul className="products-nav__ul">
        <li>
          <Link to="electronics">Electronics</Link>
        </li>

        <li>
          <Link to="jew">Jeweleries</Link>
        </li>

        <li>
          <Link to="mens">Men's Clothing</Link>
        </li>

        <li>
          <Link to="women">Women's Clothing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProductsNav;
