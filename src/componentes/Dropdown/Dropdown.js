import './Dropdown.css';

export const Dropdown = (props) => {
    
    return (
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)};
            </select>
        </div>
    );
};