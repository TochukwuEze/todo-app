import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import { Button, FormControl, Input, InputLabel, } from '@mui/material';



function App() {
  const [todos, setTodos] = useState(['abc', 'cbc'])
  const [input, setImput] = useState('')

  // when the app loads, we need to listen to the database and fetch the new todos as they added/removed
 

  const addTodo = (event)=>{
    // this will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
    setImput('') // clear up the input after submit 
  }
  return (
    <div className="App">
     <h1>Hello Tochukwu!!</h1>
     <form> 
        <FormControl>
          <InputLabel>write todo</InputLabel>
          <Input value={input} onChange={event => setImput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} variant="contained" type='submit' onClick={addTodo}>Add Todo</Button>
     </form>
     <ul>
       {todos.map(todo =>(
       <Todo text={todo}/>
       ))}
     </ul>
    </div>
  );
}

export default App;
