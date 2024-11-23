import styles from "./Footer.module.scss";

function Footer() {
	return (
		<footer className="container mx-auto py-5 border-t-[1px] border-gray-300 mt-4 px-3 xl:px-0">
			<div className="text-gray-700 dark:text-white font-bold">
				<p>&copy; 2023 CANIFA</p>
			</div>
		</footer>
	);
}

export default Footer;
