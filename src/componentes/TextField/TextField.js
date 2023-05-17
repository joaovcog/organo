import './TextField.css';

export const TextField = (props) => {
    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className='text-field'>
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={placeholderModificada} />
        </div>
    );
};