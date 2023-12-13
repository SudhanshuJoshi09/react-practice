import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar';
import CheckboxList from './components/CheckboxList';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <ProgressBar percent={50} /> */}
      {/* <CheckboxList></CheckboxList> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
