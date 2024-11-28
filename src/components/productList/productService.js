// const productURL = "https://dummyjson.com/products";
const productURL = "http://localhost:3000/products";

const productService = {
	async getProduct(id) {
		try {
			const res = await fetch(`${productURL}/${id}`);
			const data = await res.json();
			return { status: 1, message: "success", data };
		} catch (err) {
			console.log(err);
			return { status: 0, message: err, data: null };
		}
	},
	async getProducts(condition) {
		try {
			const res = await fetch(productURL);
			const data = await res.json();
			return { status: 1, message: "success", data };
		} catch (err) {
			console.log(err);
			return { status: 0, message: err, data: null };
		}
	},
	async deleteProduct(id) {
		try {
			const res = await fetch(`${productURL}/${id}`, {
				method: "DELETE"
			});
			const data = await res.json();
			return { status: 1, message: "success", data };
		} catch (err) {
			console.log(err);
			return { status: 0, message: err, data: null };
		}
	},
	async addProduct(product) {
		try {
			const res = await fetch(productURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(product)
			});
			const data = await res.json();
			return { status: 1, message: "success", data };
		} catch (err) {
			console.log(err);
			return { status: 0, message: err, data: null };
		}
	},
	async updateProduct(product) {
		try {
			const res = await fetch(`${productURL}/${product.id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(product)
			});
			const data = await res.json();
			return { status: 1, message: "success", data };
		} catch (err) {
			console.log(err);
			return { status: 0, message: err, data: null };
		}
	}
};

export default productService;
