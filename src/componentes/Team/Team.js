import Employee from '../Employee';
import './Team.css';

export const Team = (props) => {
    const cssCorSecundaria = {backgroundColor: props.corSecundaria};

    return (
        //? ou &&
        (props.colaboradores.length > 0) ? <section className='team' style={ cssCorSecundaria }>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='employees'>
                {props.colaboradores.map(colaborador => 
                    <Employee key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} corDeFundo={props.corPrimaria} />)}
            </div>
        </section>
        : ''
    );
};