import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import Field from '../Field';
import './Form.css';

export const Form = ({aoColaboradorCadastrado, nomesTimes, cadastrarTime}) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
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

    const aoSalvarTime = (evento) => {
        evento.preventDefault();
        cadastrarTime({nome: nomeTime, cor: corTime});
        setNomeTime('');
        setCorTime('');
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Field 
                    required={true} 
                    label='Nome' 
                    placeholder='Digite o seu nome' 
                    valor={nome} aoAlterado={valor => setNome(valor)} />
                <Field 
                    required={true} 
                    label='Cargo' 
                    placeholder='Digite o seu cargo' 
                    valor={cargo} aoAlterado={valor => setCargo(valor)} />
                <Field 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem' 
                    valor={imagem} aoAlterado={valor => setImagem(valor)} />
                <Dropdown 
                    required={true} 
                    label='Time' 
                    items={nomesTimes} 
                    valor={time} aoAlterado={valor => setTime(valor)} />
                <Button>
                    Criar Card
                </Button>
            </form>

            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field 
                    required 
                    label='Nome' 
                    placeholder='Digite o nome do time' 
                    valor={nomeTime} aoAlterado={valor => setNomeTime(valor)} 
                />
                <Field 
                    required 
                    label='Cor'
                    type='color' 
                    placeholder='Digite a cor do time' 
                    valor={corTime} aoAlterado={valor => setCorTime(valor)} />
                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    );
}