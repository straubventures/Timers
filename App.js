import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'
import MCounter from './MCounter.js'
import HCounter from './HCounter.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Timer</h1>
        
          <Counter />
          <MCounter />
          <HCounter />
      </header>
    </div>
  );
}



export default App;
