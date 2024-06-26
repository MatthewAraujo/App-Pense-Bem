import React, { useState } from 'react';

const gabaritos = {
  '141': ['B','C','D','D','X','D','A','D','C','B','D','A','A','D','C','A','C','C','B','D','A','A','A','B','D','A','C','A','D','D'],
  '142': ['B','D','D','D','B','D','A','A','D','A','B','A','C','A','B','C','A','A','B','A','D','B','B','B','C','D','C','D','D','D'],
  '143': ['A','C','A','A','B','C','A','A','B','A','D','B','B','C','C','B','A','D','B','A','D','B','B','D','C','C','D','B','A','D'],
  '144': ['B','D','D','B','B','D','C','A','A','D','A','D','B','A','D','C','D','D','C','C','B','D','A','A','C','D','B','B','D','D'],
  '145': ['B','B','D','A','B','D','A','B','C','C','A','B','C','C','D','D','C','B','B','B','A','C','A','D','D','D','C','D','C','A']
}

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
