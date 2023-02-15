import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosAction.module.css'

function TodosAction({ deleteAllTodos, deleteComplitedTodo, complitedTodoExist }) {
    return (
        <div className={styles.todosActionContainer}>
            <Button title="Delete Todos" onClick={deleteAllTodos} ><RiRefreshLine /></Button>
            <Button
                title="Clear Completed Todos"
                onClick={deleteComplitedTodo}
                disabled={!complitedTodoExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosAction