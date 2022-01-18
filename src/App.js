
import './App.css';
import ComponentA from './components/ComponentA';
import MyCounter from './components/MyCounter';
import CounterContexProvider from './contexts/CounterContext';

function App() {
  return (

    <CounterContexProvider>

      <div className="App">

        <MyCounter/>
        <ComponentA/>
    
      </div>

    </CounterContexProvider>

  );
}

export default App;
