import './App.css';
import React from 'react';
import logo from './logo.svg';

const name = "YOUR_NAME_HERE"; // Feel free to add your own name!

// We need to write an interface with the shape of the props for <HelloWorld>
// And call it HelloWorldProps.
// https://www.typescriptlang.org/docs/handbook/interfaces.html
// We can skip the 'children' prop because TypeScript knows React components can have children.
interface HelloWorldProps {
  name: string;
}
const HelloWorld: React.FunctionComponent<HelloWorldProps> = (props) => {
  return (
    <div>
      <p>Hello world to {props.name}!</p>
      {props.children}
    </div>
  );
};

const WarningText: React.FunctionComponent<{}> = () => {
  return <p>Warning: TypeScript has been found to be addictive!</p>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld name={name}>
          <WarningText />
        </HelloWorld>
      </header>
    </div>
  );
}

export default App;
