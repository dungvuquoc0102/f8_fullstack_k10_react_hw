import React, { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import productService from "../../services/productService";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../productContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ProductForm = () => {
	const productSchema = z.object({
		title: z.string().trim().min(6, "Title must be at least 6 characters long"),
		price: z.number().positive("Price must be a positive number"),
		description: z.string().optional()
	});
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({ resolver: zodResolver(productSchema) });
	const { id } = useParams();
	const navigate = useNavigate();
	const { products, setProducts } = useContext(ProductContext);

	useEffect(() => {
		id &&
			(async () => {
				const res = await productService.getById("products", id);
				if (res.status !== 200) return alert("Error");
				reset(res.data);
			})();
	}, []);

	async function handleSubmitForm(data) {
		if (!id) {
			const res = await productService.create("products", data);
			if (res.status !== 201) return alert("Error");
			setProducts([...products, res.data]);
		} else {
			const res = await productService.updateById("products", id, data);
			if (res.status !== 200) return alert("Error");
			const resAll = await productService.getAll("products");
			if (resAll.status !== 200) return alert("Error");
			setProducts(resAll.data);
		}
		confirm("Do you want redirect to Dashboard Page?") && navigate("/admin");
		if (!id) reset();
	}

	return (
		<div className="border border-gray-300 rounded-md p-3 w-fit">
			<h1 className="text-2xl text-blue-500">{id ? "Update" : "Add"} Product</h1>
			{/* form */}
			<form className="mt-4" action="" onSubmit={handleSubmit(handleSubmitForm)}>
				{/* Title */}
				<div className="flex flex-col">
					<label htmlFor="title">Title</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="text" id="title" name="title" {...register("title")} />
					{errors.title && <span className="text-red-500">{errors.title.message}</span>}
				</div>
				{/* Price */}
				<div className="flex flex-col">
					<label htmlFor="price">Price</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="number" step="any" id="price" name="price" {...register("price", { valueAsNumber: true })} />
					{errors.price && <span className="text-red-500">{errors.price.message}</span>}
				</div>
				{/* Description */}
				<div className="flex flex-col">
					<label htmlFor="description">Description</label>
					<textarea className="border border-gray-300 w-[500px] rounded-md p-2" id="description" name="description" {...register("description")} />
					{errors.description && <span className="text-red-500">{errors.description.message}</span>}
				</div>
				{/* Submit button */}
				<div className="flex flex-col">
					<button className="p-2 px-4 mt-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit">
						{id ? "Update" : "Add"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductForm;
