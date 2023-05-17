import './Employee.css';

export const Employee = ({nome, imagem, cargo, corDeFundo}) => {
    return(
        <div className='employee'>
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