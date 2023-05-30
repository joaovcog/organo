import Employee from '../Employee';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

export const Team = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    const cssCorSecundaria = {backgroundColor: hexToRgba(time.cor, '0.4')};

    return (
        //? ou &&
        (colaboradores.length > 0) ? <section className='team' style={ cssCorSecundaria }>
            <input type='color' className='input-cor' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='employees'>
                {colaboradores.map((colaborador, indice) => {
                    return <Employee 
                        key={colaborador.id}
                        colaborador={colaborador}
                        corDeFundo={time.cor} 
                        aoDeletar={aoDeletar} 
                        aoFavoritar={aoFavoritar} />
                    })}
            </div>
        </section>
        : ''
    );
};