import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosAction from './components/Todos/TodosAction'

import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComlpited: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComlpited: !todo.isComlpited }
          : { ...todo }
      ))
  }

  const deleteAllTodosHandler = () => {
    setTodos([])
  }

  const deleteComplitedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComlpited))
  }

  const complitedTodoCount = todos.filter((todo) => todo.isComlpited).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!todos.length || <TodosAction
        deleteAllTodos={deleteAllTodosHandler}
        deleteComplitedTodo={deleteComplitedTodoHandler}
        complitedTodoExist={!!complitedTodoCount} />}
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoHandler} />
      {complitedTodoCount > 0 && <h2>{`You have complited ${complitedTodoCount} ${complitedTodoCount > 1 ? 'todos' : 'todo'}`}</h2>}
    </div>
  );
}

export default App
