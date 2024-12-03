import ReactDOM from "react-dom";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
	let darkMode = localStorage.getItem("darkMode");
	if (darkMode === null) {
		localStorage.setItem("darkMode", 0);
		darkMode = 0;
	} else {
		darkMode = Number(darkMode);
	}

	const [isDarkMode, setIsDarkMode] = useState(darkMode);
	darkMode ? document.body.parentNode.classList.add("dark") : document.body.parentNode.classList.remove("dark");

	function toggleDarkMode() {
		setIsDarkMode((prev) => (prev + 1) % 2);
		let blockDarkMode = localStorage.getItem("darkMode");
		blockDarkMode = Number(blockDarkMode);
		blockDarkMode = (blockDarkMode + 1) % 2;
		localStorage.setItem("darkMode", blockDarkMode);
		blockDarkMode ? document.body.parentNode.classList.add("dark") : document.body.parentNode.classList.remove("dark");
	}

	return (
		<header className="border-b-[1px] border-gray-300 dark:text-white px-3 xl:px-0">
			{/* wrapper */}
			<div className="container mx-auto	py-5 flex justify-between items-center">
				{/* logo */}
				<div>
					<Link to="/" className="font-bold text-2xl">
						DummyJSON
					</Link>
				</div>
				{/* menu */}
				<div>
					<nav>
						{/* list */}
						<ul className="flex gap-5 font-bold uppercase">
							{/* item */}
							<li>
								<a href="#!">Nữ</a>
							</li>
							<li>
								<a href="#!">Nam</a>
							</li>
							<li>
								<a href="#!">Bé nữ</a>
							</li>
							<li>
								<a href="#!">Bé trai</a>
							</li>
							<li>
								<a href="#!">Sale</a>
							</li>
						</ul>
					</nav>
				</div>
				{/* function */}
				<div className="flex gap-5 items-center">
					{/* search */}
					<div className="p-2 px-4 border-[1px] border-gray-300 rounded-full hidden">
						<input className="outline-none bg-transparent" type="text" placeholder="Tìm kiếm" />
						<button>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					{/* dark mode */}
					{/* <div>
							<button onClick={toggleDarkMode}>{isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
						</div> */}
					{/* admin */}
					<Link to="/admin" className="p-2 px-4 bg-blue-400 rounded-md text-white hover:bg-blue-500">
						Admin
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
