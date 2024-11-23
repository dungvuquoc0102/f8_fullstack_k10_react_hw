export default function ProductItem({ product }) {
	return (
		<li className="border-[1px] border-gray-200  bg-white">
			<a href="#!">
				{/* img */}
				<img className="aspect-[500/659]  object-cover" src={product.image} alt="img product" />
				{/* title */}
				<div className="px-2 pt-4 font-bold line-clamp-1 min-h-[24px] border-t-[1px] border-gray-200">{product.name}</div>
				{/* short description */}
				<div className="text-sm m-2 line-clamp-2 min-h-[40px] text-gray-500">Mô tả: {product.short_description}</div>
				{/* sku */}
				<div className="m-2 text-sm text-gray-500">SKU: {product.sku}</div>
				{/* material */}
				<div className="m-2 text-sm line-clamp-1 text-gray-500">Chất liệu: {product.materials}</div>
				{/* instruction */}
				<div className="m-2 text-sm line-clamp-2 min-h-[40px] text-gray-500">Hướng dẫn: {product.instruction}</div>
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
	);
}
