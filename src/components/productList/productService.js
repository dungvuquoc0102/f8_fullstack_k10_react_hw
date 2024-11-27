const productURL = "https://dummyjson.com/products";

const productService = {
	async getProducts(condition) {
		return fetch(`${productURL}/search?q=${condition.search}&limit=${condition.limit}&skip=${condition.skip}`)
			.then((res) => res.json())
			.then((data) => {
				return {status: 1, message: "success", data};
			})
			.catch((err) => {
				return {status: 0, message: err, data: null};
			});
	}
};

export default productService;
