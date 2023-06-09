import axios from "axios";

export const productsData = async () => {
	const products = await axios.get("http://localhost/api/product/get.php");
	return products;
};

export const categoryData = async () => {
	const products = await axios.get("http://localhost/api/category/get.php");
	return products;
};
