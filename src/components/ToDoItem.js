import { useState } from 'react'
import EditToDoItem from './EditToDoItem';
import Button from "./Button"

const ToDoItem = ({ toDoItem, onDelete, onChange }) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div className={`to-do-item ${toDoItem.important ? 'to-do-item--important' : ''}`}>
            {editMode ?
                (
                    <>
                        <EditToDoItem initValues={toDoItem} onAdd={(values) => {
                            onChange(values);
                            setEditMode(false);
                        }} />
                        <Button label="Cancel" onClick={() => setEditMode(false)} />
                    </>
                )
                :
                (
                    <>
                        <div>{toDoItem.description}</div>
                        <Button label="Edit" onClick={() => setEditMode(true)} />
                        <Button label="Delete" onClick={() => onDelete(toDoItem.id)} />
                    </>
                )
            }
        </div>
    )
}

export default ToDoItem
