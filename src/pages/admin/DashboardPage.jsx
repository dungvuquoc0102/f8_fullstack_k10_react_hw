import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";

const DashboardPage = () => {
	return (
		<>
			<Header />
			<div className="min-h-screen container mx-auto flex border-x-[1px]">
				<div className="w-[200px] border-r-[1px] p-3">
					<NavigationBar />
				</div>
				<div className="flex-1 p-3">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default DashboardPage;
