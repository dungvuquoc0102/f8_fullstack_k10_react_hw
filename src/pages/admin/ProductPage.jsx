import React, { useContext, useState } from "react";
import ProductContext from "../../productContext";
import { Link } from "react-router-dom";
import service from "./../../axios/index";

const ProductPage = () => {
	const { products, setProducts } = useContext(ProductContext);
	const [page, setPage] = useState(1);

	async function handleDeleteProduct(id) {
		if (confirm("Are you sure to delete this product?")) {
			const res = await service.removeById("products", id);
			if (res.status !== 200) return alert("Error");
			setProducts((prev) => prev.filter((product) => product.id !== id));
		}
	}

	function handlePaginationProducts(page) {
		setPage(page);
	}

	return (
		<div>
			{/* Function */}
			<div className="flex justify-between">
				{/* Add product btn */}
				<div>
					<Link to="/admin/product-add" className="p-2 px-4 bg-blue-400 rounded-md text-white hover:bg-blue-500">
						Add Product
					</Link>
				</div>
				{/* search */}
				{/* <label className="p-2 px-4 border-[1px] border-gray-300 rounded-full dark:text-white">
					<input type="text" className="outline-none bg-transparent" placeholder="Tìm kiếm" />
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</label> */}
				{/* limit */}
				<select className="dark:text-white outline-none p-1 border-[1px] rounded-md w-fit bg-transparent" disabled>
					<option value="10">10 / page</option>
				</select>
				{/* Number of products */}
				<div>Total products: {products.length}</div>
			</div>
			{/* Product table */}
			<div className="mt-3 border-[1px] rounded-md">
				<table className="w-full divide-y-[1px]">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className="divide-y-[1px]">
						{products.slice((page - 1) * 10, page * 10).map((product, index) => (
							<tr key={index} className="text-center">
								<td>{product.id}</td>
								<td>{product.title}</td>
								<td>{product.price}</td>
								<td>
									<Link to={"/admin/product-update/" + product.id} className="m-2 p-2 px-4 bg-yellow-400 rounded-md text-white hover:bg-yellow-500">
										Edit
									</Link>
									<button onClick={() => handleDeleteProduct(product.id)} className="m-2 p-2 px-4 bg-red-400 rounded-md text-white hover:bg-red-500">
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{/* Pagination */}
			<div className="mt-3 flex justify-center">
				<button onClick={() => handlePaginationProducts(page - 1)} disabled={page === 1} className="m-2 p-2 px-4 bg-blue-400 rounded-md text-white hover:bg-blue-500">
					Prev
				</button>
				<button onClick={() => handlePaginationProducts(page + 1)} disabled={Math.ceil(products.length / 10) === page} className="m-2 p-2 px-4 bg-blue-400 rounded-md text-white hover:bg-blue-500">
					Next
				</button>
			</div>
		</div>
	);
};

export default ProductPage;
