import TodoList from "@/app/components/todoList"
import db from "@/utils/db"

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 1000))
  const todos = await db.todo.findMany({})
  console.log(todos)
  return todos
}


const TodosPage = async () => {
  const todos = await getData()
  return <div> 
    <TodoList todos={todos} />
  </div>

}


export default TodosPage