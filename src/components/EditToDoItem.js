const EditToDoItem = ({ initValues, onAdd }) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const description = e.currentTarget.description.value;
        const important = e.currentTarget.important.checked;
        if (!description) {
            alert('You need to add a description.');
            return;
        }

        onAdd({ id: initValues.id, description, important });
    };

    return (
        <form className="todo-item--edit" onSubmit={onSubmit}>
            <div>
                <label>ToDo</label>
                <input id='description' type="text" placeholder="What's to do?" defaultValue={initValues.description} />
            </div>
            <div>
                <label>Important</label>
                <input id='important' type="checkbox" defaultChecked={initValues.important} />
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
