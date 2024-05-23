import { CiCircleMinus } from 'react-icons/ci'

import { useTodoContext } from '../context/ToDoContext'

const ToDoCard = ({ todo }) => {
  const { toggleComplete, removeTodo } = useTodoContext()

  return (
    <>
      <div
        className={`mx-auto w-full rounded-md border shadow-md my-4
      ${todo.completed ? 'opacity-50' : ''}`}
      >
        <div class="flex flex-row bg-white px-6 py-4 rounded-md">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="checkbox"
          />
          <div className="grow ml-6 mt-0.5">
            <p className="text-sm font-medium">{todo.text}</p>
          </div>
          <button onClick={() => removeTodo(todo.id)}>
            <CiCircleMinus className="text-red-500" size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default ToDoCard
