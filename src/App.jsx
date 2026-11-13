import { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
import RandomProduct from './components/random-product';

const BASE_URL = 'https://fakestoreapi.com';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-5">
      <RandomProduct />

      <h1 className="text-3xl font-bold my-8">
        All Products
      </h1>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
