import React from 'react';

import Routes from './routes';
import './global.css';


function App() {
  return (
    <Routes />
  );
}

export default App;

// JSX (javascript xml) Função JS que retorna HTML
//Propriedade: parecido com conceito de atributo de HTML, são atributos repassados para componentes
//Estado: Informação que vai ser mantida pelo componente, toda vez que for alterado o componente vai ser remontado
// Imutabilidade: não é possivel mudar o valor estado de uma forma direta por questão de performance, temos que sobrepor o valor, usa o 'useState'
