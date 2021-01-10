import React, { Component } from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";

import SHOP_DATA from "./data";

class Shop extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop">
        {collections.map(({ id, ...collectionsProps }) => (
          <CollectionPreview key={id} {...collectionsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
