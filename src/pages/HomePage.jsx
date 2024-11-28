import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductList from "../components/productList/ProductList";

const HomePage = () => {
	return (
		<>
			<Header />
			<ProductList />
			<Footer />
		</>
	);
};

export default HomePage;
