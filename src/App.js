import logo from './logo.svg';
import './App.css';

//import { namedImport } from 'somelibarry';
import { useEffect, useState } from 'react';


// Functional Compoent
function App() {
  //1. State/Hook Area
  //const [variable,setVariableFunction] 

  //Hook Variable
  const [students,setStudents] = useState([]);
  
  //On Page Load event = useEffect

  //somefunction(Acutal Arguments)
  useEffect(()=>{
    console.log('Page Load Succesffully');

    //API Calling code will come here

    //HTTP Request Call

    // Fetch API  (Built-n JS)


    //
    //1. CallBack functions
    //2. Async FUnction
    //3. Promis Objects
    //PO can be resolved=Success or Rejected = error

    // po.then().then().then().catch();

    // PO Object Chain
    //fetch(resource, options)
    fetch('http://localhost:1337/api/students')
    .then((d)=>{
      //JSON Parse/Readable
      //Every function return something
      return d.json();
    })
    .then((d)=>{
        console.log(d.data);
        setStudents(d.data);
    })
    .catch((e)=>{
      console.log(e);
    });

    // AXIOS   (3rd Party Api Calling library)


    //stament1
    //statment2
    //statemetn3
  },[]) // HOF  , [] = Array

  //2. Function defination are

  //3. Return Statement JSX syntax
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
        //Array.lenght
        students.length > 0 &&
        <h2>
            
            {
              students.map((currentValue,index,array)=>{
                 // every method return something
                 return <h1>{currentValue.attributes.name}</h1>
              })
              
            }
        </h2>
      }

    </div>
  );
}

export default App;
