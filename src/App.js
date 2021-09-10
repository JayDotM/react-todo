import './App.css';
import { useState } from 'react'
import Button from './components/Button';
import ToDoList from './components/ToDoList';
import EditToDoItem from './components/EditToDoItem';

let nextTaskId = 5;

const defaultToDos = [
  {
    id: 1,
    description: "My first Todo!",
    important: true
  },
  {
    id: 2,
    description: "My second Todo!",
    important: false
  },
  {
    id: 3,
    description: "My third Todo!",
    important: true
  },
  {
    id: 4,
    description: "My forth Todo!",
    important: false
  },
];

function App() {
  const [showAddToDo, setShowAddToDo] = useState(false);

  const addToDo = ({ description, important }) => {
    setToDos([...toDos, {
      id: nextTaskId++,
      description: description,
      important: important
    }]);

    setShowAddToDo(false);
  };

  const [toDos, setToDos] = useState(defaultToDos);

  const onDeleteToDo = (id) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const onChange = ({ id, description, important }) => {
    console.log(id, description, important);
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ?
          {
            ...toDo,
            description: description,
            important: important
          }
          : toDo)
    );
  }

  return (
    <div className="App">
      <h1>Todo-List</h1>
      {showAddToDo ?
        (
          <>
            <Button label="Cancel" onClick={() => setShowAddToDo(false)} />
            <EditToDoItem onAdd={addToDo} />
          </>
        )
        : (<Button label="Add" onClick={() => setShowAddToDo(true)} />)}
      {toDos.length > 0 ?
        (<ToDoList toDos={toDos} onDeleteToDo={onDeleteToDo} onChange={onChange} />)
        : (<div>You are done! Congrats! :)</div>)}
    </div>
  );
}

export default App;
