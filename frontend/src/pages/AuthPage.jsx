import { Fragment, useState, useEffect } from "react";
import { InputApp } from "@/shared/ui/Input/InputApp.jsx";
import { ButtonApp } from "@/shared/ui/Button/ButtonApp.jsx";
import useAuthorization from "@/shared/api/Authorization.js";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { authToken, error, authorize } = useAuthorization();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await authorize({ name, email, password });
    };

    useEffect(() => {
        if(authToken){
            location.reload();
        }
    }, [authToken]);

    return (
        <Fragment>
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="form-title">Авторизация</h2>
                <InputApp
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="Имя"
                />
                <InputApp
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <InputApp
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Пароль"
                />
                <ButtonApp type="submit" text="Авторизироваться" />
                {error && <p>{error.message || "Произошла ошибка при авторизации."}</p>}
            </form>
        </Fragment>
    );
}