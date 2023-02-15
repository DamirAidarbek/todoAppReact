import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import styles from './Todo.module.css'

function Todo({ todos, deleteTodo, toggleTodo }) {
    return (
        <div className={`${styles.todo} ${todos.isComlpited ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText} >{todos.text}</div>
            <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => deleteTodo(todos.id)} />
            <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todos.id)} />
        </div>
    )
}

export default Todo