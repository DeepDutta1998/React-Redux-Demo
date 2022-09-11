import logo from './logo.svg';
import './App.css';
import { Home } from './component/Home';
import { About } from './component/About';

function App() {
  return (
    <div className="App">
      <h1>Redux Store </h1>
      <Home/>
      <hr/>
      <About/>

    </div>
  );
}

export default App;
