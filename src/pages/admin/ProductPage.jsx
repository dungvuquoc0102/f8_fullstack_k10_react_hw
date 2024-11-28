import React, { useContext, useState } from "react";
import ProductContext from "../../productContext";
import { Link } from "react-router-dom";
import productService from "../../components/productList/productService";

const ProductPage = () => {
	const { products, setProducts } = useContext(ProductContext);

	async function handleDeleteProduct(id) {
		confirm("Are you sure to delete this product?") && (await productService.deleteProduct(id));
		const data = await productService.getProducts({ search: "", limit: 10, skip: 0 });
		if (!data.status) return;
		setProducts(data.data);
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
				{/* <select className="dark:text-white outline-none p-1 border-[1px] rounded-md w-fit bg-transparent">
					<option value="10">10 / page</option>
					<option value="20">20 / page</option>
					<option value="30">30 / page</option>
					<option value="40">40 / page</option>
				</select> */}
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
						{products.map((product, index) => (
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
		</div>
	);
};

export default ProductPage;
