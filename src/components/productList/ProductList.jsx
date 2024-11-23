import { useState } from "react";
import { datas } from "../../datas/data";

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
					<li className="border-[1px] border-gray-200  bg-white">
						<a href="#!">
							{/* img */}
							<img className="aspect-[500/659]  object-cover" src={product.image} alt="img product" />
							{/* title */}
							<div className="px-2 pt-4 font-bold line-clamp-1 min-h-[24px] border-t-[1px] border-gray-200">{product.name}</div>
							{/* short description */}
							<div className="text-sm m-2 line-clamp-2 min-h-[40px]">Mô tả: {product.short_description}</div>
							{/* sku */}
							<div className="m-2 text-sm">SKU: {product.sku}</div>
							{/* material */}
							<div className="m-2 text-sm line-clamp-1">Chất liệu: {product.materials}</div>
							{/* instruction */}
							<div className="m-2 text-sm line-clamp-2 min-h-[40px]">Hướng dẫn: {product.instruction}</div>
							<div className="m-2 flex justify-between text-sm">
								{/* price */}
								<div className="font-bold whitespace-nowrap">
									<span>
										{product.final_price.toLocaleString("vi-VN", {
											style: "currency",
											currency: "VND"
										})}
									</span>
								</div>
								{/* stock */}
								<div className="whitespace-nowrap">Số lượng: {product.stock}</div>
							</div>
						</a>
					</li>
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
