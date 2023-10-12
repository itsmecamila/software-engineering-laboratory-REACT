import logo from './logo.svg';
import './App.css';
import Relogio from './componentes/relogio';
import Letreiro from './componentes/letreiro';
import './style.css';

function App() {
  return (
    <div className="App">
      <Relogio></Relogio>
      <Letreiro frase="Conheça a Fatec!"></Letreiro>
      
    </div>
  );
}

export default App;
