//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function Button(props) {
  const handleClick = () => props.onclickfn(props.increment)
  return<button onClick={handleClick}>
	+{props.increment}
	</button>
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = (inc) => setCounter(counter+inc) 
	return (
		<div>
		<Button onclickfn={incCounter} increment = {1}/>
		<Button onclickfn={incCounter} increment = {5}/>
		<Button onclickfn={incCounter} increment = {10}/>
		<Button onclickfn={incCounter} increment = {100}/>
		<Display message={counter} />
		</div>
	);
}
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//	<p>{Hello}</p>
//      </header>
//    </div>
//  );
//}

export default App;
