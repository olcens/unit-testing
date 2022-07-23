import { useDeferredValue } from "react";

interface ProductListProps {
  products: string[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const deferredProducts = useDeferredValue(products);
  return (
      <ul>
        {deferredProducts.map((product) => (
            <li key={product}>{product}</li>
        ))}
      </ul>
  );
};
