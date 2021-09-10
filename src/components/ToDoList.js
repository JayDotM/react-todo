import ToDoItem from "./ToDoItem"

const ToDoList = ({ toDos, onDeleteToDo, onChange }) => {
    return (
        <div>
            {toDos.map((todo) => (
                <ToDoItem key={todo.id} toDoItem={todo} onDelete={onDeleteToDo} onChange={onChange} />))}
        </div>
    )
}

export default ToDoList
