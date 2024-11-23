import { useState } from "react";

import Product from "./ProductItem";
import { datas } from "./../../datas/data";

function productList() {
	const gettedMoreProducts = 8;

	const [isShowed, setIsShowed] = useState(true);
	const [loadedProducts, setLoadedProducts] = useState(datas.slice(0, gettedMoreProducts));

	function toggleProductList() {
		setIsShowed((prev) => !prev);
	}

	function seeMoreProducts() {
		setLoadedProducts((prev) => {
			return [...prev, ...datas.slice(prev.length, prev.length + gettedMoreProducts)];
		});
	}

	return (
		<div className="container mx-auto min-h-screen px-3 xl:px-0">
			<div className="flex justify-between items-center mt-4">
				<button className="bg-gray-200 p-2 px-4 rounded-full cursor-pointer min-w-[180px]" onClick={toggleProductList}>
					{isShowed ? "Ẩn" : "Hiện"} tất cả sản phẩm
				</button>
				<span className="dark:text-white">Số lượng sản phẩm hiển thị: {isShowed ? loadedProducts.length : 0}</span>
			</div>
			{isShowed && (
				<div>
					<ul className="grid grid-cols-2 gap-3 py-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-7 lg:py-7">
						{loadedProducts.map((product, index) => (
							<Product key={index} product={product} />
						))}
					</ul>
				</div>
			)}
			{isShowed && loadedProducts.length < datas.length && (
				<div className="flex justify-center">
					<button className="bg-gray-300 p-2 px-4 rounded-full cursor-pointer min-w-[180px]" onClick={seeMoreProducts}>
						Hiển thị thêm
					</button>
				</div>
			)}
		</div>
	);
}

export default productList;
