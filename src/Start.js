import React, { useState } from 'react';

const gabaritos = {
  '141': ['B', 'A', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B', 'A', 'D', 'C', 'B'],
  '142': ['B', 'D', 'A', 'A', 'D', 'B', 'D', 'A', 'A', 'D', 'B', 'D', 'A', 'A', 'D', 'B', 'D', 'A', 'A', 'D', 'B', 'D', 'A', 'A', 'D', 'B', 'D', 'A', 'A', 'D'],
  // Adicione os outros gabaritos (143, 144, 145, 146) aqui
};

function PenseBem() {
  const [programa, setPrograma] = useState('');
  const [num, setNum] = useState(0);
  const [tentativa, setTentativa] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [gabarito, setGabarito] = useState([]);
  const [isGameActive, setIsGameActive] = useState(false);

  const iniciar = () => {
    const prog = prompt('Digite o número do programa (141 a 146):', "");
    if (gabaritos[prog]) {
      setPrograma(prog);
      setGabarito(gabaritos[prog]);
      setPontos(0);
      setNum(0);
      setTentativa(1);
      setIsGameActive(true);
    } else {
      alert("Número de programa inválido! Digite um número entre 141 e 146.");
    }
  };

  const jogar = (resposta) => {
    if (!isGameActive) return;

    if (resposta === gabarito[num]) {
      if (tentativa === 1) {
        setPontos(pontos + 3);
      } else if (tentativa === 2) {
        setPontos(pontos + 2);
      } else {
        setPontos(pontos + 1);
      }
      alert("Resposta correta");
      setNum(num + 1);
      setTentativa(1);
    } else {
      if (tentativa === 3) {
        alert("Você perdeu!");
        setNum(num + 1);
        setTentativa(1);
      } else {
        alert("Resposta incorreta");
        setTentativa(tentativa + 1);
      }
    }

    if (num === 29) {
      setIsGameActive(false);
      alert(`*** FIM ***\nPontos: ${pontos}`);
    }

    //adicionar aqui atualização do visor
    
  };

  return (
    <>
      <p>
        <input type="button" id="botaoA" value="A" onClick={() => jogar('A')} disabled={!isGameActive} />
        <input type="button" id="botaoB" value="B" onClick={() => jogar('B')} disabled={!isGameActive} />
        <input type="button" id="botaoC" value="C" onClick={() => jogar('C')} disabled={!isGameActive} />
        <input type="button" id="botaoD" value="D" onClick={() => jogar('D')} disabled={!isGameActive} />
      </p>
      <input id="botaoStart" type='button' value='Start/Reset Game' onClick={iniciar} />
      <div id="visor1">{isGameActive ? `${programa} -> Pergunta ${num + 1}:` : 'Inicie o jogo'}</div>
      <div id="visor2">{isGameActive ? `Tentativa ${tentativa} de 3` : ''}</div>
      <div id="visor3">Pontos: {pontos}</div>
    </>
  );
}

export default PenseBem;
