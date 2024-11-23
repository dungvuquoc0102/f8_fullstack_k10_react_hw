export default function ProductItem({ product }) {
	return (
		<li className="border-[1px] border-gray-200  bg-white dark:bg-[#2d2d2d] dark:text-white dark:border-none">
			<a href="#!">
				{/* img */}
				<img className="aspect-[500/659]  object-cover dark:	opacity-90" src={product.image} alt="img product" />
				{/* title */}
				<div className="px-2 pt-4 font-bold line-clamp-2 min-h-[64px] border-t-[1px] border-gray-200">{product.name}</div>
				{/* short description */}
				<div className="text-sm m-2 line-clamp-2 min-h-[40px] text-gray-500">Mô tả: {product.short_description}</div>
				{/* sku */}
				<div className="m-2 text-sm text-gray-500">SKU: {product.sku}</div>
				{/* material */}
				<div className="m-2 text-sm line-clamp-1 text-gray-500">Chất liệu: {product.materials || "Đang cập nhật"}</div>
				{/* instruction */}
				<div className="m-2 text-sm line-clamp-2 min-h-[40px] text-gray-500">Hướng dẫn: {product.instruction || "Đang cập nhật"}</div>
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
					<div className="whitespace-nowrap">Số lượng: {product.stock >= 1000 ? (product.stock / 1000).toFixed(1) + "k" : product.stock}</div>
				</div>
			</a>
		</li>
	);
}
