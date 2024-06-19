import logo from './assets/disney.png'
import './App.css';
import planet from './assets/planet.png';
import Start from './Start';

function App() {
  return (
    <div className="App">
      <h1 id='titulo'>PENSE BEM</h1>
      <img src={planet} className="App-planets" alt="planets" />
      <img src={logo} className="App-logo" alt="logo" />
      <p id='subtitulo'>Escolha o programa definido no livro e responda as perguntas</p>
      <header className="App-header">
        <form>
          <Start/>  
        </form>
      </header>
    </div>
  );
}

export default App;
