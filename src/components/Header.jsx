import { useTodoContext } from '../context/ToDoContext'

import Button from './Button'

const Header = ({ onAdd, isVisible }) => {
  const { clearTodos } = useTodoContext()

  const handleClearTodos = () => {
    clearTodos()
    handleCloseModal()
  }

  const handleOpenModal = () => {
    document.getElementById('clear_modal').showModal()
  }

  const handleCloseModal = () => {
    document.getElementById('clear_modal').close()
  }

  return (
    <>
      <div className="flex my-5">
        <div className="grow">
          <p className="text-2xl font-bold">Things you should be doing today...</p>
        </div>
        <div className="">
          {!isVisible && <Button text="Add New" type="normal" handler={onAdd} />}
          <Button text="Clear" type="clear" handler={handleOpenModal} />
        </div>
      </div>

      <dialog id="clear_modal" className="modal">
        <div className="modal-box text-center">
          <p className="py-4">Confirm to clear all todos?</p>
          <div className="modal-action justify-center">
            <form method="dialog">
              <Button text="Cancel" handler={handleCloseModal} />
              <Button text="Confirm" type="confirm" handler={handleClearTodos} />
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
export default Header
