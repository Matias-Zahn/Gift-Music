import { Link } from "react-router-dom"

function PlayListCreateCount({ setIsShowModal, isShowModal }) {


  return (
    <div className={`${isShowModal ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-300 h-screen bg-black/50 absolute top-0 right-0 left-0 bottom-0 grid place-items-center`}>
        <div className="bg-primary-light p-10 grid place-items-center gap-5 rounded-3xl ">
            <h2 className="uppercase text-lg font-bold">Quieres crear un playlist para compartir?</h2>
            <div className="flex gap-4">
                <button onClick={() => setIsShowModal(false)} className="border border-white rounded-3xl hover:bg-secondary hover:text-black transition-all p-2 px-4">No</button>
                <Link to='/register' className="border border-white rounded-3xl hover:bg-secondary hover:text-black transition-all p-2 px-4">Si, crear cuenta</Link>
            </div>
        </div>
    </div>
  )
}
export default PlayListCreateCount