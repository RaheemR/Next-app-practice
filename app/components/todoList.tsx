import Todo from "./todo"
const TodoList = ({todos}) => {

  return (
    <div>
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList