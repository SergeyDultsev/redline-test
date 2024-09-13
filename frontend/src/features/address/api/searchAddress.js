import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const SearchAddress = (query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
        if (!query) return;

        setLoading(true);

        try {
            const url = `${import.meta.env.VITE_LOCAL_API_URL}/standardize-address`;
            const token = Cookies.get('token');

            const response = await axios.post(
                url,
                {query},
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${token}`,
                    },
                }
            );

            setData(response.data);
        } catch (error) {
            setError(error.response ? error.response.data : "Network Error");
        } finally {
            setLoading(false);
        }
    }, [query]);

    useEffect(() => {
        fetchData();
    }, [query, fetchData]);

    return { data, error, loading };
};

export default SearchAddress;
