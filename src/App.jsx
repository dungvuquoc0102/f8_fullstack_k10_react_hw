import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ProductForm from "./pages/admin/ProductForm.jsx";
import ProductPage from "./pages/admin/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { useEffect, useState } from "react";
import { ProductProvider } from "./productContext.js";
import productService from "./services/productService";
import RegisterLayout from "./layouts/auth/RegisterLayout.jsx";
import LoginLayout from "./layouts/auth/LoginLayout.jsx";
import LogoutLayout from "./layouts/auth/LogoutLayout.jsx";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await productService.getAll("products");
			if (res.status !== 200) return alert("Error");
			setProducts(res.data);
		})();
	}, []);

	return (
		<ProductProvider value={{ products, setProducts }}>
			<BrowserRouter>
				<Routes>
					<Route path="/admin" element={<DashboardPage />}>
						<Route index element={<ProductPage />} />
						<Route path="product-add" element={<ProductForm />} />
						<Route path="product-update/:id" element={<ProductForm />} />
					</Route>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />

					<Route path="/register" element={<RegisterLayout />} />
					<Route path="/login" element={<LoginLayout />} />
					<Route path="/logout" element={<LogoutLayout />} />
				</Routes>
			</BrowserRouter>
		</ProductProvider>
	);
}

export default App;
