import InputStyle from "@/shared/ui/Input/Input.module.scss";

export function InputApp({ value, onChange, type , placeholder }){
    return (
        <input
            className={InputStyle['input__default']}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    )
}