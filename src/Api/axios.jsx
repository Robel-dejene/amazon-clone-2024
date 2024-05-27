import axios from "axios";

const axiosInstance = axios.create({
	//local instance of firebase functions
	// baseURL: "http://127.0.0.1:5001/clone-2024-98157/us-central1/api",
	//deploy version of amazon server on render.com
	baseURL: "https://amazon-api-deploy-1-g71o.onrender.com",
});

export {axiosInstance};