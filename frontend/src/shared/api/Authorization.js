import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useAuthorization = () => {
    const [authToken, setAuthToken] = useState("");
    const [error, setError] = useState("");

    const authorize = async ({ name, email, password }) => {
        try {
            const url = `${import.meta.env.VITE_LOCAL_API_URL}/login`;
            const response = await axios.post(
                url,
                { name, email, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                }
            );

            setAuthToken(response.data.auth_token);
            Cookies.set("token", response.data.auth_token);
            setError("");
        } catch (error) {
            setError(error.response ? error.response.data : "Network Error");
        }
    };

    return { authToken, error, authorize };
};

export default useAuthorization;