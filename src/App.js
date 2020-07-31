import React ,{useState} from 'react';
import Hello from './hello';
import Tweet from './tweet';
import './index.css'

function App() {

  // const [isBlue, setBlue] = useState(false);
  // const [count,setCount] = useState(0);
  // const increament = () =>{
  //   setCount(count + 1);
  //   setBlue(!isBlue)
  // }

  const [users,setUser] = useState([
    {name: 'Karthick' ,message: 'Hello world'},
    {name: 'Tim' ,message: 'Hello Apple'},
    {name: 'Elon' ,message: 'Hello Space'},
    {name: 'Jeff' ,message: 'Hello Cart'}
  ])

  return (
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
      {/* Change color and count function */}

      {/* <h1 className={isBlue ? "blue":""}>Change my color</h1>
      <button onClick={increament}>Increament</button>
      <h1>{count}</h1> */}

      {/* multiple count  */}

      {/* <Tweet name="Karthick" message="make world a better place"/>
      <Tweet name="Tim" message="make Apple a trillon dollar company"/>
      <Tweet name="Elon" message="make Mars a better place to live"/>
      <Tweet name="Jeff" message="make Amazon a best store"/> */}
    </div>
  );
}

export default App;
