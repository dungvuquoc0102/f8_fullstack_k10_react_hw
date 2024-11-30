import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ProductAddOrUpdatePage from "./pages/admin/ProductAddOrUpdatePage.jsx";
import ProductPage from "./pages/admin/ProductPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { useEffect, useState } from "react";
import { ProductProvider } from "./productContext.js";
import service from "./axios/index.js";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await service.getAll("products");
			if (res.status !== 200) return alert("Error");
			setProducts(res.data);
		})();
	}, []);

	return (
		<ProductProvider value={{ products, setProducts }}>
			<BrowserRouter>
				<Routes>
					<Route path="/admin" element={<DashboardPage />}>
						<Route path="/admin" element={<ProductPage />} />
						<Route path="/admin/product-add" element={<ProductAddOrUpdatePage />} />
						<Route path="/admin/product-update/:id" element={<ProductAddOrUpdatePage />} />
					</Route>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</ProductProvider>
	);
}

export default App;
