import Cookies from "js-cookie";
import axios from "axios";

const saveAddress = async ({ country, postal_code, region, city, federal_district }) => {
    const url = `${import.meta.env.VITE_LOCAL_API_URL}/address-create`;
    const token = Cookies.get('token');

    try {
        const response = await axios.post(
            url,
            {
                country,
                postal_code,
                region,
                city,
                federal_district,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        const errorMessage = error.response ? JSON.stringify(error.response.data) : "Ошибка при сохранении адреса";
        throw new Error(errorMessage);
    }
};

export default saveAddress;