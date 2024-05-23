import { useState } from 'react'

import { useTodoContext } from '../context/ToDoContext'

import Button from './Button'

const FormToDo = ({ onHide }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const { addTodo } = useTodoContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return
    if (inputValue.length > 100) {
      setError('Title must be shorter than or equal to 100 characters')
      return
    }
    addTodo(inputValue)
    setInputValue('')
    onHide()
  }

  const handleCancel = (e) => {
    e.preventDefault()
    setInputValue('')
    onHide()
  }

  return (
    <>
      <div className="flex my-5">
        <div className="grow">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new to-do title..."
            className="py-3 px-4 block w-full rounded-lg text-sm focus:outline-none placeholder:text-base "
          />
        </div>
        <div>
          <Button text="Cancel" type="cancel" handler={handleCancel} />
          <Button text="Create" type="normal" handler={handleSubmit} />
        </div>
      </div>
      {error && <p>{error}</p>}
    </>
  )
}
export default FormToDo
