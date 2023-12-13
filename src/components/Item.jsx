import React from "react";

function Item({ itemPhoto, itemTitle, itemPrice }) {
  return (
    <section className="items">
      <img src={itemPhoto} alt="" />

      <p className="truncate">{itemTitle}</p>

      <p> {itemPrice} </p>
    </section>
  );
}

export default Item;
