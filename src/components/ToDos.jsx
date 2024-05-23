import ToDoCard from './ToDoCard'
import { useTodoContext } from '../context/ToDoContext'

const ToDos = () => {
  const { todos } = useTodoContext()

  return (
    <div className="mt-6">
      {todos.map((todo) => (
        <ToDoCard key={todo.id} todo={todo} />
      ))}
      {todos.length === 0 && (
        <div className="relative mx-auto w-full py-30 rounded-md border shadow-md">
          <div className="text-center bg-white p-10 rounded-md">
            <p className='text-sm font-medium'>
              Nothing to-do yet.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
export default ToDos
