import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="border-b-[1px] border-gray-300 dark:text-white px-3 xl:px-0">
			{/* wrapper */}
			<div className="container mx-auto	py-5 flex justify-between items-center">
				{/* logo */}
				<div>
					<Link to="/admin" className="font-bold text-2xl">
						ADMIN PAGE
					</Link>
				</div>
				{/* function */}
				<div className="flex gap-5 items-center">
					{/* search */}
					{/* <div className="p-2 px-4 border-[1px] border-gray-300 rounded-full">
						<input className="outline-none bg-transparent" type="text" placeholder="Tìm kiếm" />
						<button>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div> */}
					{/* dark mode */}
					<div className="hidden">
						<button>
							<FontAwesomeIcon icon={faMoon} />
						</button>
					</div>
					{/* homepage */}
					<Link to="/" className="p-2 px-4 bg-blue-400 rounded-md text-white hover:bg-blue-500">
						Homepage
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
