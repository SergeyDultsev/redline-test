import {SearchBar} from "@/features/address/components/Search/SearchBar.jsx";
import {AddressList} from "@/features/address/components/AddressList/AddressList.jsx";
import {Fragment, useEffect, useState} from "react";
import searchAddress from "@/features/address/api/searchAddress.js";
import getAddress from "@/features/address/api/getAddress.js";

export default function HomePage(){
    const [query, setQuery] = useState("");
    const [saveAddresses, setSaveAddresses] = useState([]);
    const [error, setError] = useState("");
    const {data: searchResult, searchError, loading} = searchAddress(query);

    const handleSearch = async (query) => {
        setQuery(query);
    }

    const handleKeyDown = async () => {
        if(event.key === "F5"){
            event.preventDefault();
            try {
                const saveAddresses = await getAddress();
                setSaveAddresses(saveAddresses);
            } catch (error) {
                setError(error);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [])


    return (
        <Fragment>
            <SearchBar onSearch={handleSearch}/>
            {loading && <div>Loading...</div>}
            {searchError && <div>Search Error: {searchError}</div>}
            {error && <div>Error: {error}</div>}
            <AddressList addresses={searchResult} saveAddresses={saveAddresses}/>
        </Fragment>
    )
}