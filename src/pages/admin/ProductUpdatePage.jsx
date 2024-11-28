import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import productService from "../../components/productList/productService";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../productContext";

const ProductUpdatePage = () => {
	const { register, handleSubmit, setValue } = useForm();
	const { id } = useParams();
	const navigate = useNavigate();
	const { setProducts } = useContext(ProductContext);

	useEffect(() => {
		(async () => {
			const res = await productService.getProduct(id);
			if (!res.status) return alert(res.message);
			setValue("id", res.data.id);
			setValue("title", res.data.title);
			setValue("price", res.data.price);
			setValue("description", res.data.description);
		})();
	}, []);

	async function handleSubmitForm(data) {
		const res = await productService.updateProduct({ ...data, id });
		if (!res.status) return alert(res.message);
		const newProducts = await productService.getProducts();
		if (!newProducts.status) return alert(newProducts.message);
		setProducts(newProducts.data);
		navigate("/admin");
	}

	return (
		<div className="border border-gray-300 rounded-md p-3 w-fit">
			<h1 className="text-2xl text-blue-500">Update Product</h1>
			<form className="mt-4" action="" onSubmit={handleSubmit(handleSubmitForm)}>
				{/* id */}
				<div className="flex flex-col">
					<label htmlFor="id">Id</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="text" id="id" name="id" {...register("id")} disabled />
				</div>
				<div className="flex flex-col">
					<label htmlFor="title">Title</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="text" id="title" name="title" {...register("title")} />
				</div>
				<div className="flex flex-col">
					<label htmlFor="price">Price</label>
					<input
						className="border border-gray-300 w-[500px] rounded-md p-2"
						type="text"
						onKeyDown={(e) => {
							if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== ".") {
								e.preventDefault();
							}
						}}
						id="price"
						name="price"
						{...register("price")}
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="description">Description</label>
					<textarea className="border border-gray-300 w-[500px] rounded-md p-2" id="description" name="description" {...register("description")} />
				</div>
				<div className="flex flex-col">
					<button className="p-2 px-4 mt-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit">
						Update
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductUpdatePage;
