import ReactDOM from "react-dom";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
	const [darkMode, setDarkMode] = useState(false);

	function toggleDarkMode() {
		setDarkMode(!darkMode);
		document.body.parentNode.classList.toggle("dark");
	}

	return (
		<header className="border-b-[1px] border-gray-300">
			{/* wrapper */}
			<div className="container mx-auto	py-5 flex justify-between items-center">
				{/* logo */}
				<div>
					<a href="#!">
						<img className="w-[73px]" src="https://canifa.com/assets/images/logo.svg" alt="logo" />
					</a>
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
					<div className="p-2 px-4 border-[1px] border-gray-300 rounded-full">
						<input className="outline-none bg-transparent" type="text" placeholder="Tìm kiếm" />
						<button>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
					{/* dark mode */}
					<div>
						<button onClick={toggleDarkMode}>{darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
