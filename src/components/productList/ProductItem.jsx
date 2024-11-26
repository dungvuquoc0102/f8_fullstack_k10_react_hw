export default function ProductItem({ product }) {
	return (
		<li className="border-[1px] border-gray-200  bg-white dark:bg-[#2d2d2d] dark:text-white dark:border-none">
			<a href="#!">
				{/* img */}
				<div className="bg-white dark:bg-black">
					<img className="aspect-[1/1]  object-cover dark:opacity-90" src={product.thumbnail} alt="img product" />
				</div>
				{/* title */}
				<div className="px-2 pt-4 font-bold line-clamp-2 min-h-[64px] border-t-[1px] dark:border-t-transparent border-gray-200">{product.title}</div>
				<div className="m-2 flex justify-between text-sm">
					{/* price */}
					<div className="font-bold whitespace-nowrap">
						<span>
							{product.price.toLocaleString("en-US", {
								style: "currency",
								currency: "USD"
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
