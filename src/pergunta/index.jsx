

import "./styles.css";
import React from "react";

const Pergunta = ({textoDireita, textoEsquerda,valorDireita, valorEsquerda, setValorEsquerda, setValorDireita, setPergunta, pergunta }) => {
  const setValor = (valor) => {
    switch (valor) {
      case 1:
        setValorEsquerda(valorEsquerda + 100);
        break;
      case 2:
        setValorEsquerda(valorEsquerda + 80)
        setValorDireita(valorDireita + 20)
        break;
      case 3:
        setValorEsquerda(valorDireita+60)
        setValorDireita(valorEsquerda+40)
        break;
      case 4:
        setValorDireita(valorDireita+60)
        setValorEsquerda(valorEsquerda+40)
      break;
      case 5:
        setValorDireita(valorDireita+80)
        setValorEsquerda(valorEsquerda+20)
        break;
      case 6:
        setValorDireita(valorDireita+100)
        break;
      default:
        //console.log('alo');
        break;
    }
    setPergunta(pergunta+1)
  }
  return (
      <div className="pergunta">
        <h2 className="titulo">Qual das alternativas abaixo você mais se indetifica?</h2>
        <div className="perguntasBox">
          <p>
            {textoEsquerda}
          </p>
          <p>
            {textoDireita}
          </p>
        </div>

        <div className="repostaBox">
          <div className="botao grande" onClick={() => {setValor(1)}} ></div>
          <div className="botao medio" onClick={() => {setValor(2)}} ></div>
          <div className="botao pequeno" onClick={() => {setValor(3)}} ></div>
          <div className="botao pequeno" onClick={() => {setValor(4)}} ></div>
          <div className="botao medio " onClick={() => {setValor(5)}}></div>
          <div className="botao grande" onClick={() => {setValor(6)}} ></div>
        </div>
      </div>
  );
};

export default Pergunta;
