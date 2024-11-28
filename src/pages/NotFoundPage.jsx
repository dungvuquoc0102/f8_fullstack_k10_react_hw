import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-start">
			<div className="mt-20">
				<h1 className="text-3xl">404 Not Found</h1>
				<p>Sorry, the page you are looking for does not exist.</p>
				<Link to="/" className="text-blue-500">
					Go to Home Page
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
