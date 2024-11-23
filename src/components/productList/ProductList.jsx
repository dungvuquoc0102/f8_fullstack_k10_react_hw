import { useState } from "react";

import Product from "./ProductItem";
import { datas } from "./../../datas/data";

function productList() {
	const gettedMoreProducts = 8;

	const [loadedProducts, setLoadedProducts] = useState(datas.slice(0, gettedMoreProducts));

	function seeMoreProducts() {
		setLoadedProducts((prev) => {
			return [...prev, ...datas.slice(prev.length, prev.length + gettedMoreProducts)];
		});
	}

	return (
		<div className="container mx-auto">
			<h1>Danh sách sản phẩm</h1>
			<ul className="grid grid-cols-2 gap-3 py-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 lg:py-7">
				{loadedProducts.map((product, index) => (
					<Product key={index} product={product} />
				))}
			</ul>
			{loadedProducts.length < datas.length && (
				<button className="" onClick={seeMoreProducts}>
					See More
				</button>
			)}
		</div>
	);
}

export default productList;
