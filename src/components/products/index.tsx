import React, { useState, useTransition } from "react";
import { ProductList } from "components/products/productList";
import { generateProducts } from "utils/generateProducts";

const dummyProducts = generateProducts();

function filterProducts(filterTerm: string) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

export const Products = () => {
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  function updateFilterHandler(event: React.ChangeEvent<HTMLInputElement>) {
    // startTransition(() => {
    //   setFilterTerm(event.target.value);
    // });
    setFilterTerm(event.target.value);
  }

  return (
      <div id="app">
          <header>
              <h1 className="mt-4 mb-5">Products</h1>
          </header>
        <input type="text" onChange={updateFilterHandler} />
        {isPending && <p style={{ color: "white" }}>Loading...</p>}
        <ProductList products={filteredProducts} />
      </div>
  );
}
