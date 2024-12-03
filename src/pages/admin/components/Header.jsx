import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const localUser = JSON.parse(localStorage.getItem("user"));
		if (localUser) {
			setUser(localUser);
		}
	}, []);
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
					{/* <div className="hidden">
						<button>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
							</svg>
						</button>
					</div> */}
					{/* Register and login */}
					{!user.email && (
						<>
							<Link to="/register" className="font-bold">
								Register
							</Link>
							<Link to="/login" className="p-2 px-4 bg-green-500 rounded-md text-white hover:bg-green-600">
								Login
							</Link>
						</>
					)}
					{user.email && (
						<Link to="/logout" className="p-2 px-4 bg-green-500 rounded-md text-white hover:bg-green-600">
							Logout
						</Link>
					)}
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
