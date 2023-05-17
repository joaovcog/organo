import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import { Team } from './componentes/Team/Team';
import { Footer } from './componentes/Footer/Footer';

function App() {

  const times = [
    {
      nome: 'Programação', 
      corPrimaria: '#57c278', 
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End', 
      corPrimaria: '#82cffa', 
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Data Science', 
      corPrimaria: '#a6d157', 
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'DevOps', 
      corPrimaria: '#e06b69', 
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design', 
      corPrimaria: '#db6ebf', 
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile', 
      corPrimaria: '#ffba05', 
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão', 
      corPrimaria: '#ff8a29', 
      corSecundaria: '#ffeedf'
    }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form nomesTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />

      {times.map(time => 
        <Team key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
      
      <Footer />
    </div>
  );
}

export default App;
