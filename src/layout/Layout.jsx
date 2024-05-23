const Layout = ({children}) => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/4"></div>
      <div className="basis-1/2 mt-20">{children}</div>
      <div className="basis-1/4"></div>
    </div>
  )
}
export default Layout