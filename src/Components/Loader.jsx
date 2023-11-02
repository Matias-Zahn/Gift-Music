function Loader( { absolute}) {
  return (
    <div className={`flex ${absolute && 'absolute top-0 right-1/2 translate-x-1/2'}  justify-center items-center h-screen`}>
    <div className="animate-spin rounded-full border-t-2 border-secondary border-r-2 h-12 w-12"></div>
  </div>
  )
}
export default Loader