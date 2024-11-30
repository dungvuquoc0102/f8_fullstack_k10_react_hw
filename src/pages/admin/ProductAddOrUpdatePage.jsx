import React, { useContext, useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import service from "../../axios/index";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../productContext";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ProductAddOrUpdatePage = () => {
	const productSchema = z.object({
		title: z.string().min(1, "Title is required"),
		price: z.coerce.number().positive("Price must be a positive number").min(1, "Price is required"),
		description: z.string().min(1, "Description is required")
		// thumbnail: z.string(),
	});
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({ resolver: zodResolver(productSchema) });
	const { id } = useParams();
	const navigate = useNavigate();
	const { products, setProducts } = useContext(ProductContext);

	useEffect(() => {
		(async () => {
			if (!id) {
				setValue("id", "Auto Increment");
				return;
			}
			const res = await service.getById("products", id);
			if (res.status !== 200) return alert("Error");
			setValue("id", res.data.id);
			setValue("title", res.data.title);
			setValue("price", res.data.price);
			setValue("description", res.data.description);
			// setValue("thumbnail", res.data.thumbnail);
		})();
	}, []);

	async function handleSubmitForm(data) {
		if (!id) {
			delete data.id;
			const resAdd = await service.create("products", data);
			if (resAdd.status !== 201) return alert("Error");
			setProducts([...products, resAdd.data]);
			confirm("Add product successfully. Do you want redirect to Dashboard Page?") && navigate("/admin");
			setValue("id", "Auto Increment");
			setValue("title", "");
			setValue("price", 0);
			setValue("description", "");
		} else {
			const resUpdate = await service.updateById("products", id, data);
			if (resUpdate.status !== 200) return alert("Error");
			const resAll = await service.getAll("products");
			if (resAll.status !== 200) return alert("Error");
			setProducts(resAll.data);
			navigate("/admin");
		}
	}

	return (
		<div className="border border-gray-300 rounded-md p-3 w-fit">
			<h1 className="text-2xl text-blue-500">{id ? "Update" : "Add"} Product</h1>
			<form className="mt-4" action="" onSubmit={handleSubmit(handleSubmitForm)}>
				{/* Id */}
				<div className="flex flex-col">
					<label htmlFor="id">Id</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="text" id="id" name="id" {...register("id")} disabled />
				</div>
				{/* Title */}
				<div className="flex flex-col">
					<label htmlFor="title">Title</label>
					<input className="border border-gray-300 w-[500px] rounded-md p-2" type="text" id="title" name="title" {...register("title")} />
					{errors.title && <span className="text-red-500">{errors.title.message}</span>}
				</div>
				{/* Price */}
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
					{errors.price && <span className="text-red-500">{errors.price.message}</span>}
				</div>
				{/* Image */}
				{/* {id ? (
					<div className="flex flex-col">
						<label htmlFor="thumbnail">Thumbnail</label>
						<input className="border border-gray-300 w-[500px] rounded-md p-2" type="file" id="thumbnail" name="thumbnail" {...register("thumbnail")} />
					</div>
				) : (
					<div className="flex flex-col">
						<label htmlFor="thumbnail">Thumbnail</label>
						<input className="border border-gray-300 w-[500px] rounded-md p-2" type="file" id="thumbnail" name="thumbnail" {...register("thumbnail")} />
					</div>
				)} */}
				{/* Description */}
				<div className="flex flex-col">
					<label htmlFor="description">Description</label>
					<textarea className="border border-gray-300 w-[500px] rounded-md p-2" id="description" name="description" {...register("description")} />
					{errors.description && <span className="text-red-500">{errors.description.message}</span>}
				</div>
				{/* Submit */}
				<div className="flex flex-col">
					<button className="p-2 px-4 mt-3 bg-blue-400 hover:bg-blue-500 text-white rounded-md" type="submit">
						{id ? "Update" : "Add"}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductAddOrUpdatePage;
