
import './App.css';
import { Component1 } from './Errorboundary';
import Errorboundary from './Errorboundary';

function App() {
  return (
    <div className="App">
      <Errorboundary>
        <Component1 a={["apple","banana","pinapple","guava"]}/>
      </Errorboundary>
    </div>
  );
}

export default App;
