import axios from "axios";
import Cookies from "js-cookie";

const getAddress = async () => {
    const url = `${import.meta.env.VITE_LOCAL_API_URL}/address-show`;
    const token = Cookies.get('token');

    try {
        const response = await axios.get(
            url, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });

        return response.data?.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : "Error fetching address");
    }
};

export default getAddress;