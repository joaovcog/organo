import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css';

export const Form = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    required={true} 
                    label='Nome' 
                    placeholder='Digite o seu nome' 
                    valor={nome} aoAlterado={valor => setNome(valor)} />
                <TextField 
                    required={true} 
                    label='Cargo' 
                    placeholder='Digite o seu cargo' 
                    valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <TextField 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <Dropdown 
                    required={true} 
                    label='Time' 
                    items={props.nomesTimes} 
                    valor={time} aoAlterado={valor => setTime(valor)} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    );
}