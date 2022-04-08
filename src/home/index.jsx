

import React from 'react';
import "./styles.css";


const Home = ({Pergunta, Setpergunta}) => {
  return (
    <div>
      <div id='box'>
        <h1 className='titulo'>Bem vindo ao teste das casas da CompJunior!!!</h1>
        <div className='botaoHome' onClick={() => {Setpergunta(Pergunta + 1 )}}>Começar</div>
      </div>
    </div> 
  );
};


export default Home;