import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import productService from "../../components/productList/productService";
import productContext from "../../productContext";
import { useContext } from "react";

const ProductAddPage = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const { setProducts } = useContext(productContext);

	async function handleSubmitForm(data) {
		const res = await productService.addProduct(data);
		console.log(res);
		if (!res.status) return alert(res.message);
		setProducts((prev) => [...prev, res.data]);
		navigate("/admin");
	}

	return (
		<div className="border border-gray-300 rounded-md p-3 w-fit">
			<h1 className="text-2xl text-blue-500">Add Product</h1>
			<form className="mt-4" action="" onSubmit={handleSubmit(handleSubmitForm)}>
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
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default ProductAddPage;
