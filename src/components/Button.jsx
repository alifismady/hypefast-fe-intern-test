const Button = ({ text, handler, type }) => {
  return (
    <button
      className={`px-2 py-2 min-w-[90px] text-center
        ${type === 'confirm' && 'text-rose-50 bg-rose-800'}
        ${type === 'cancel' && 'text-sky-700'} 
        ${type === 'clear' && 'text-rose-700'} 
        ${type === 'normal' && 'text-sky-50 bg-sky-800'}
        rounded-lg`}
      type="button"
      onClick={handler}
    >
      <p className="text-sm font-semibold">{text}</p>
    </button>
  )
}
export default Button
