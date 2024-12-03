import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../productContext";

const LogoutLayout = () => {
	const nav = useNavigate();

	useEffect(() => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("user");
		nav("/");
	}, []);

	return <div>LogoutLayout</div>;
};

export default LogoutLayout;
