import { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import productService from "./productService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function ProductList() {
	const [search, setSearch] = useState("");
	const [limit, setLimit] = useState(10);
	const [skip, setSkip] = useState(0);
	const [page, setPage] = useState(1);
	const [products, setProducts] = useState([]);
	const [totalProducts, setTotalProducts] = useState(0);
	let myTimeout;

	useEffect(() => {
		productService.getProducts().then((res) => {
			if (!res.status) return;
			setProducts(res.data);
			setTotalProducts(res.data.length);
		});
	}, [search, limit, skip]);

	function handleSearch(e) {
		clearTimeout(myTimeout);
		myTimeout = setTimeout(() => {
			setSearch(e.target.value);
			setSkip(0);
			setPage(1);
		}, 1000);
	}

	function handleLimit(e) {
		const newLimit = parseInt(e.target.value);
		setLimit(newLimit);
		setSkip(0);
		setPage(1);
	}

	function handlePrevBtn() {
		setSkip(skip - limit);
		setPage(page - 1);
	}

	function handleNextBtn() {
		setSkip(skip + limit);
		setPage(page + 1);
	}

	function handlePage(e) {
		if (e.target.value === "") {
			setPage("");
			return;
		}
		const newPage = parseInt(e.target.value);
		if (newPage < 1 || newPage > Math.ceil(totalProducts / limit)) return;
		setSkip((newPage - 1) * limit);
		setPage(newPage);
	}

	function handleAfterOnChange() {
		if (page === "") {
			setPage(1);
			setSkip(0);
		}
	}

	return (
		<div className="container mx-auto min-h-screen px-3 xl:px-0">
			<div className="flex justify-between items-center mt-4">
				{/* search */}
				{/* <label className="p-2 px-4 border-[1px] border-gray-300 rounded-full dark:text-white">
					<input type="text" className="outline-none bg-transparent" placeholder="Tìm kiếm" onChange={handleSearch} />
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</label> */}
				{/* limit */}
				{/* <select className="dark:text-white outline-none p-1 border-[1px] w-fit bg-transparent" onChange={handleLimit}>
					<option value="10">10 / page</option>
					<option value="20">20 / page</option>
					<option value="30">30 / page</option>
					<option value="40">40 / page</option>
				</select> */}
			</div>
			{totalProducts ? (
				<>
					<div>
						<ul className="grid grid-cols-2 gap-3 py-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-7 lg:py-7">
							{products.map((product, index) => (
								<ProductItem key={index} product={product} />
							))}
						</ul>
					</div>
					<div className="justify-center gap-2 text-xl hidden">
						{/* prev button */}
						<button onClick={handlePrevBtn} className={(skip / limit ? "hover:bg-gray-200 " : "text-gray-400 ") + "p-2 px-4 rounded-md"} disabled={page === 1}>
							<FontAwesomeIcon icon={faAngleLeft} />
						</button>
						{/* current page */}
						<input
							type="number"
							className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-[1px] border-gray-300 p-1 px-3 w-[60px] text-center outline-blue-500"
							value={page}
							pattern="[0-9]*"
							onChange={handlePage}
							onKeyDown={(e) => {
								if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
									e.preventDefault();
								}
							}}
							onBlur={handleAfterOnChange}
						/>
						<span className="p-2 px-4">/</span>
						{/* total page */}
						<span className="p-2 px-4 rounded-md">{Math.ceil(totalProducts / limit)}</span>
						{/* next button */}
						<button onClick={handleNextBtn} disabled={page === Math.ceil(totalProducts / limit)} className={page === Math.ceil(totalProducts / limit) ? "text-gray-400" : "hover:bg-gray-200" + " p-2 px-4 rounded-md cursor-pointer"}>
							<FontAwesomeIcon icon={faAngleRight} />
						</button>
					</div>
				</>
			) : (
				<div className="flex justify-center items-center h-[50vh]">
					<p className="text-2xl text-gray-400">Không tìm thấy sản phẩm</p>
				</div>
			)}
		</div>
	);
}
