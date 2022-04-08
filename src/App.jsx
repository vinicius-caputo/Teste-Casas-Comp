import "./App.css";
import React, { useState, useEffect } from "react";
import Pergunta from "./pergunta";
import Resultado from "./resultado";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Cookies from "universal-cookie";
import Home from "./home";

function App() {
  const [SomosTransparentes, setSomosTransparentes] = useState(0);
  const [VamosAlem, setVamosAlem] = useState(0);
  const [AmamosResultados, setAmamosResultados] = useState(0);
  const [FazemosAcontencer, setFazemosAcontencer] = useState(0);
  const [DesenvolvemosPessoas, setDesenvolvemosPessoas] = useState(0);

  const [pos, setpos] = useState("App-header pos1");
  const [pergunta, setpergunta] = useState(0);


  const Perguntas = () => {
    console.log("SomosTransparentes ", SomosTransparentes);
    console.log("VamosAlem ", VamosAlem);
    console.log("AmamosResultados ", AmamosResultados);
    console.log("FazemosAcontencer ", FazemosAcontencer);
    console.log("DesenvolvemosPessoas ", DesenvolvemosPessoas);
    console.log("------------------------------------------------");
    switch (pergunta) {
      case 0:
        return (
          <Home Pergunta={pergunta} Setpergunta={setpergunta}/>
        );
      case 1:
        return (
          <Pergunta
            textoEsquerda="Você fica chateado quando um colega de equipe não consegue se dedicar tanto quanto os demais e procura entender o porque dele não ter se doado tanto para atingirem juntos o objetivo."
            valorEsquerda={VamosAlem}
            setValorEsquerda={setVamosAlem}
            textoDireita="Você fica mais feliz pelo processo do que pelo resultado, oque sua equipe aprendeu, os desafios superados é a parte mais importante da jornada."
            valorDireita={DesenvolvemosPessoas}
            setValorDireita={setDesenvolvemosPessoas}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 2:
        return (
          <Pergunta
            textoEsquerda="Gosto de comemorar com os membros da minha equipe apos a relização de alguma atividade exaustiva e demorada, acredito que esse momemto de celebração e muito importante para a equipe"
            valorEsquerda={AmamosResultados}
            setValorEsquerda={setAmamosResultados}
            textoDireita="Quando algo te incomoda no seu trabalho, você comunica imediatamente seu chefe, pois tem a transparência como um valor importante a ser carregado"
            valorDireita={SomosTransparentes}
            setValorDireita={setSomosTransparentes}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 3:
        return (
          <Pergunta
            textoEsquerda="Tenho proatividade de tomar frente das tarefas, não espero que me digam oque fazer, estou sempre disposto a buscar atividades para me aprimorar. "
            valorEsquerda={FazemosAcontencer}
            setValorEsquerda={setFazemosAcontencer}
            textoDireita="Procuro entregar a mais do que me foi solicitado, tentando enxergar partes no projeto que podem ser melhoradas"
            valorDireita={VamosAlem}
            setValorDireita={setVamosAlem}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 4:
        return (
          <Pergunta
            textoEsquerda="Para atingir grandes resultados, você tende a exaltar as qualidades individuais de cada membro de sua equipe"
            valorEsquerda={DesenvolvemosPessoas}
            setValorEsquerda={setDesenvolvemosPessoas}
            textoDireita="As pessoas tendem a se inspirar em você, pois enxergam-a como um líder. "
            valorDireita={FazemosAcontencer}
            setValorDireita={setFazemosAcontencer}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 5:
        return (
          <Pergunta
            textoEsquerda="Sempre estou disponivel para ajudar pessoas e passar meus conhcimentos a diante, mesmo sendo uma area que não domino."
            valorEsquerda={VamosAlem}
            setValorEsquerda={setVamosAlem}
            textoDireita="Em um conflito, acho que não existe uma verdade única, cada pessoa envolvida tem seu ponto de vista que deve ser considerado."
            valorDireita={SomosTransparentes}
            setValorDireita={setSomosTransparentes}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 6:
        return (
          <Pergunta
            textoEsquerda="Procuro organizar e planejar o trabalho, separando as horas que irei gastar em cada atividade antes de começar."
            valorEsquerda={FazemosAcontencer}
            setValorEsquerda={setFazemosAcontencer}
            textoDireita="Acredito que resaltar os pontos fortes de cada membro da minha equipe é uma boa maneira de engajá-los com o projeto"
            valorDireita={AmamosResultados}
            setValorDireita={setAmamosResultados}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 7:
        return (
          <Pergunta
            textoEsquerda="Você procura sempre se destacar em sua equipe, influenciando positivamente outras pessoas com o seu modo de agir. "
            valorEsquerda={DesenvolvemosPessoas}
            setValorEsquerda={setDesenvolvemosPessoas}
            textoDireita="Quando lider, procuro explicar todo o processo aos demais, exemplificando sua importancia e necessidade"
            valorDireita={SomosTransparentes}
            setValorDireita={setSomosTransparentes}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 8:
        return (
          <Pergunta
            textoEsquerda="Voce procura pesquisar mais sobre as tarefas que lhe foram solicitadas, mesmo apos ja ter terminado"
            valorEsquerda={VamosAlem}
            setValorEsquerda={setVamosAlem}
            textoDireita="Procuro sempre reconhecer os eforços das pessoas ao meu redor, mesmo que as entregas não saiam como planejado, pois elas gastaram tempo e dedicação naquela tarefa."
            valorDireita={AmamosResultados}
            setValorDireita={setAmamosResultados}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 9:
        return (
          <Pergunta
            textoEsquerda="Se alguem me pede que faça alguma atividade, procuro estar sempre disponivel para realiza-la"
            valorEsquerda={FazemosAcontencer}
            setValorEsquerda={setFazemosAcontencer}
            textoDireita="Quando alguém do seu grupo faz algo e você acha que pode ser aperfeiçoado, você propõe melhorias."
            valorDireita={SomosTransparentes}
            setValorDireita={setSomosTransparentes}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      case 10:
        return (
          <Pergunta
            textoEsquerda="Acredito que o resultado é bem mais alem que a entrega de um produto, e sim a evolução do time durante o processo."
            valorEsquerda={AmamosResultados}
            setValorEsquerda={setAmamosResultados}
            textoDireita="Você consegue enxergar os pontos fortes e fracos da sua equipe, procurando dar feedbacks sobre pontos a serem melhorados"
            valorDireita={DesenvolvemosPessoas}
            setValorDireita={setDesenvolvemosPessoas}
            pergunta={pergunta}
            setPergunta={setpergunta}
          />
        );
      default:
        break;
    }
  };

  const Casa = () => {
    // console.log("SomosTransparentes ", SomosTransparentes);
    // console.log("VamosAlem ", VamosAlem);
    // console.log("AmamosResultados ", AmamosResultados);
    // console.log("FazemosAcontencer ", FazemosAcontencer);
    // console.log("DesenvolvemosPessoas ", DesenvolvemosPessoas);
    // console.log("------------------------------------------------");
    let valorAlto = Math.max(
      SomosTransparentes,
      AmamosResultados,
      DesenvolvemosPessoas,
      FazemosAcontencer,
      VamosAlem
    );
    console.log("valor Alto ", valorAlto);

    switch (valorAlto) {
      case DesenvolvemosPessoas:
        return <Resultado casa="Desenvolvemos Pessoas" />;
      case VamosAlem:
        return <Resultado casa="Vamos Alem" />;
      case AmamosResultados:
        return <Resultado casa="Amamos Resultados" />;
      case FazemosAcontencer:
        return <Resultado casa="Fazemos Acontecer" />;
      case SomosTransparentes:
        return <Resultado casa="Somos Transparentes" />;
      default:
        break;
    }
  };
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    let nuAtual = 0;
    switch (pos) {
     case "App-header pos1":
       nuAtual = 1;
       break;
     case "App-header pos2":
       nuAtual = 2;
       break;
     case "App-header pos3":
       nuAtual = 3;
       break;
      case "App-header pos4":
       nuAtual = 4;
       break;
    case "App-header pos5":
       nuAtual = 5;
       break;
    case "App-header pos6":
        nuAtual = 6;
        break;
    case "App-header pos7":
        nuAtual = 7;
        break;
    case "App-header pos8":
        nuAtual = 8;
        break;
    case "App-header pos9":
        nuAtual = 9;
        break;
    case "App-header pos10":
        nuAtual = 10;
        break;
     default:
       nuAtual = 1;
       break;
    }
    let nAleatorio = getRandomIntInclusive(1, 10);
    while (nuAtual === nAleatorio) {
      nAleatorio = getRandomIntInclusive(1, 10);
    }
    setpos(`App-header pos${nAleatorio}`);
  }, [pergunta]);

  const cookies = new Cookies();

  return (
    <div className="App">
      <header className={pos}>
        {cookies.get("casa") ? (
          <Resultado casa={cookies.get("casa")} />
        ) : pergunta < 11 ? (

          <SwitchTransition>
            <CSSTransition
              key={pergunta}
              timeout={{ enter: 500, exit: 500 }}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames="fade"
            >
              <Perguntas />
            </CSSTransition>
          </SwitchTransition>
        ) : (
          <Casa />
        )}
      </header>
    </div>
  );
}

export default App;
