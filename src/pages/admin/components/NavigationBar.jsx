import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink className="text-blue-500" to="/admin">
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavigationBar;
