import React, { useEffect, useState } from "react";
import Item from "./Item";

function PropularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const myUrl = "https://fakestoreapi.com/products";

    fetch(myUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => err.message);
  }, []);

  return (
    <section>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>Popular Products</h1>
        <button>See all</button>
      </div>

      <div className="item-parent">

        {products.slice(1, 9).map((product) => (
          <Item
            itemPhoto={product.image}
            itemTitle={product.title}
            itemPrice={product.price}
          />
        ))}

      </div>

    </section>
  );
}

export default PropularProducts;
