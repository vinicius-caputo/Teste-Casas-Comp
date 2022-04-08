
import "./styles.css";
import React from "react";

const Resultado = ({casa, img}) => {

  const Valor = () => {
    switch (casa) {
      case "Somos Transparentes":
        return ( <span className="laranja" >{casa}</span>)
      case "Amamos Resultados":
        return ( <span className="vermelho" >{casa}</span>)
      case "Desenvolvemos Pessoas":
        return ( <span className="azul" >{casa}</span>)
      case "Fazemos Acontecer":
        return ( <span className="verde" >{casa}</span>)
      case "Vamos Alem":
        return ( <span className="amarelo" >{casa}</span>)
      default:
        break;

    }
  };
  return (
    <div className="resultBox">
      <img className="imagemResultado" src={require(`./${img}.png`)} alt=""></img>
        <h2 className="resultTitulo">Parabens!!! <Valor/> é a casa da Comp que mais te representa! </h2>
        <p className="resultado"> </p>
        
    </div>

  );
};

export default Resultado;
