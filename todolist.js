import { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const submittion = (e) => {
    e.preventDefault();
    setTodo([...todo, currentTodo]);
  };

  return (
    <>
      <h1>Hello world</h1>
      <form onSubmit={submittion}>
        <input onChange={(e) => setCurrentTodo(e.target.value)}></input>
        <button type="submit"> Add Todo</button>
      </form>

      <div>{currentTodo}</div>
      <div>
        {todo.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </>
  );
}

// form input for the todo
// map through todo FileList
