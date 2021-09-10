import { useState } from 'react'

const EditToDoItem = ({ initValues, onAdd }) => {
    const [description, setDescription] = useState(initValues.description);
    const [important, setImportant] = useState(initValues.important);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!description) {
            alert('You need to add a description.');
            return;
        }

        onAdd({ id: initValues.id, description, important });

        setDescription('');
        setImportant(false);
    };

    return (
        <form className="todo-item--edit" onSubmit={onSubmit}>
            <div>
                <label>ToDo</label>
                <input type="text" placeholder="What's to do?"
                    value={description} onChange={(e) => { setDescription(e.target.value); }} />
            </div>
            <div>
                <label>Important</label>
                <input type="checkbox" checked={important} value={important}
                    onChange={(e) => setImportant(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Save" />
        </form>
    )
}

EditToDoItem.defaultProps = {
    initValues: {
        id: '',
        description: '',
        important: false
    }
}

export default EditToDoItem
