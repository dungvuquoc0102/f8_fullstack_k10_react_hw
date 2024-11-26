const productURL = "https://dummyjson.com/products";

const productService = {
	async getProducts(condition) {
		return fetch(`${productURL}?search?q=${condition.search}&limit=${condition.limit}&skip=${condition.skip}`)
			.then((res) => res.json())
			.then((data) => {
				return data;
			});
	}
};

export default productService;
