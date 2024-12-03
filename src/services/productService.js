import instance from ".";

const productService = {
	async getById(path, id) {
		try {
			const res = await instance.get(`${path}/${id}`);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async getAll(path) {
		try {
			const res = await instance.get(path);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async removeById(path, id) {
		try {
			const res = await instance.delete(`${path}/${id}`);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async create(path, data) {
		try {
			const res = await instance.post(path, data);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async updateById(path, id, data) {
		try {
			const res = await instance.patch(`${path}/${id}`, data);
			return res;
		} catch (err) {
			console.log(err);
		}
	}
};

export default productService;
