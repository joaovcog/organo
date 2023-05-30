import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Employee.css';

export const Employee = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25, 
        onClick: favoritar
    };

    return(
        <div className='employee'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)} 
            />
            <div className='header' style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='footer'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#ff0000' /> 
                        : <AiOutlineHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    );

};