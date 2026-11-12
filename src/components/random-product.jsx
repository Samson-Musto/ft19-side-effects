import { useState, useEffect } from 'react';
import ProductCard from './product-card';

export default function RandomProduct() {
	const [productId, setProductId] = useState(1);
	const [product, setProduct] = useState(null);
	
	useEffect(
		() => {
			async function fetchProduct() {
				const response = await fetch (`https://fakestoreapi.com/products/${productId}`

				);
				const data = await response.json();
				setProduct(data);
			}
			fetchProduct();
		},[productId]);

	function randomize() {
		const randomId = Math.floor(Math.random() * 20) + 1;
		setProductId(randomId);
	}

	return (
		<div className="flex flex-col items-center gap-6 p-6">
			<h1 className="text-3xl font-bold">Random Product</h1>
			<button onClick={randomize} className="bg-purple-600 text-white px-6 py-3 rounded-lg" role="button">
				 Randomize Product
			</button>

			{product ? (
				<div className="w-full max-w-md">
					<ProductCard
						title={product.title}
						price={product.price}
						image={product.image}
						description={product.description}
						category={product.category}
						rating={product.rating}
					/>
				</div>
			) : (
				<p>Loading product...</p>
			)}
		</div>
	);
}
