import './Field.css';

export const Field = (props) => {
    const placeholderModificada = `${props.placeholder}...`;
    const type = props.type || 'text';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }

    return (
        <div className={`field ${type}-field`}>
            <label>
                {props.label}
            </label>
            <input 
                type={type} 
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.required} 
                placeholder={placeholderModificada} />
        </div>
    );
};