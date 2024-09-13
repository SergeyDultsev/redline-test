import {useEffect, useState} from "react";
import {InputApp} from "@/shared/ui/Input/InputApp.jsx";
import SearchBarStyle from './SearchBar.module.scss';
import InputStyle from "@/shared/ui/Input/Input.module.scss";

export function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const delay  = setTimeout(() => {
            if (query.length > 2) { // Отправляем запрос только при длине запроса больше 2 символов
                onSearch(query);
            }
        }, 500);

        return () => clearTimeout(delay);
    }, [query]);

    return (
        <div className={SearchBarStyle['searchBar']}>
            <InputApp
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Введите адрес"
            />
        </div>
    );
}