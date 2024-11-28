import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ProductAddPage from "./pages/admin/ProductAddPage.jsx";
import ProductPage from "./pages/admin/ProductPage.jsx";
import ProductUpdatePage from "./pages/admin/ProductUpdatePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { useEffect, useState } from "react";
import productService from "./components/productList/productService.js";
import { ProductProvider } from "./productContext.js";

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const data = await productService.getProducts({ search: "", limit: 10, skip: 0 });
			if (!data.status) return;
			setProducts(data.data);
		})();
	}, []);

	return (
		<ProductProvider value={{ products, setProducts }}>
			<BrowserRouter>
				<Routes>
					<Route path="/admin" element={<DashboardPage />}>
						<Route path="/admin" element={<ProductPage />} />
						<Route path="/admin/product-add" element={<ProductAddPage />} />
						<Route path="/admin/product-update/:id" element={<ProductUpdatePage />} />
					</Route>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</ProductProvider>
	);
}

export default App;
