import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authService from "../../services/authService";
import loginSchema from "./../../schemas/auth/loginSchema";
import ProductContext from "../../productContext";
import productService from "../../services/productService";
import instance from "../../services/index";

const LoginLayout = () => {
	const { setProducts } = useContext(ProductContext);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		resolver: zodResolver(loginSchema)
	});
	const nav = useNavigate();

	async function handleLogin(data) {
		try {
			const res = await authService.auth("/login", data);
			localStorage.setItem("accessToken", res.data.accessToken);
			localStorage.setItem("user", JSON.stringify(res.data.user));
			nav("/");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="w-[500px] max-w-full mx-auto mt-10 border rounded-md p-3">
			{/* header */}
			<h1 className="text-2xl text-center">Login Account</h1>
			{/* Login form */}
			<form onSubmit={handleSubmit(handleLogin)}>
				{/* Email */}
				<div className="mt-3">
					<input {...register("email")} type="email" placeholder="Email" className="w-full border rounded-md p-2" />
				</div>
				{errors.email && <span className="text-red-500">{errors.email.message}</span>}
				{/* Password */}
				<div className="mt-3">
					<input {...register("password")} type="password" placeholder="Password" className="w-full border rounded-md p-2" />
				</div>
				{errors.password && <span className="text-red-500">{errors.password.message}</span>}
				{/* No account? */}
				<div className="mt-3">
					<Link to="/register" className="text-blue-500">
						Do you not have an account?
					</Link>
				</div>
				{/* Submit button */}
				<div className="mt-3">
					<button className="p-2 px-4 bg-blue-400 rounded-md hover:bg-blue-500 text-white w-full">Login</button>
				</div>
			</form>
		</div>
	);
};

export default LoginLayout;
