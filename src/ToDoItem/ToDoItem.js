import './ToDoItem.css'

const ToDoItem = ({item, removeToDoItem}) => {
    return(
        <li>
            {item}
            <button onCLick={removeToDoItem}>Remove</button>
        </li>
    );
};

export default ToDoItem;