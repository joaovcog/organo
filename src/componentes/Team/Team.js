import Employee from '../Employee';
import './Team.css';

export const Team = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    const cssCorSecundaria = {backgroundColor: time.corSecundaria};

    return (
        //? ou &&
        (colaboradores.length > 0) ? <section className='team' style={ cssCorSecundaria }>
            <input type='color' className='input-cor' value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.nome)} />
            <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
            <div className='employees'>
                {colaboradores.map(colaborador => {
                    return <Employee 
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corDeFundo={time.corPrimaria} 
                        aoDeletar={aoDeletar} />
                    })}
            </div>
        </section>
        : ''
    );
};