import { AiFillCloseCircle } from 'react-icons/ai';
import './Employee.css';

export const Employee = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    return(
        <div className='employee'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
            <div className='header' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='footer'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );

};