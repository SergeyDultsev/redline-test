import ButtonStyle from './Button.module.scss'

export function ButtonApp({ onClick, text }) {
    return (
        <button className={ButtonStyle['btn__default']} onClick={onClick}>
            {text}
        </button>
    );
}