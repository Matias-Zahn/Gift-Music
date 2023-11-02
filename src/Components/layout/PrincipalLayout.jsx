import { useEffect, useState } from "react";
import PopUpAuth from "../shares/PopUpAuth";
import { PlaylistIcon } from "../Svgs";
import PopUpPlayList from "../shares/PopUpPlayList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function PrincipalLayout({ children, artistListBug }) {
  const [isShowAuth, setIsShowAuth] = useState(false)
  const [ishowPlayList, setIshowPlayList] = useState(false)

  const tracks = useSelector((store) => store.playListCart.tracks)

  useEffect(() => {
    if (ishowPlayList) {
      if (isShowAuth) setIsShowAuth(false)
        
    }
  }, [ishowPlayList])

  useEffect(() => {
    if (isShowAuth) {
      if (ishowPlayList) setIshowPlayList(false)
        
    }
  }, [isShowAuth])

  return (
    <section className="bg-dark text-white font-urbanist h-screen overflow-y-scroll  items-center bg-[url(/bg-auth-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/bg-auth-desktop.png)] transition-all duration-500 grid grid-rows-[auto_1fr]">
      <header className="bg-primary-dark flex items-center justify-between p-4  uppercase">
        <Link to='/' className="font-semibold text-xl  hover:text-secondary hover:tracking-widest transition-all duration-300">Gift Music</Link>

        <div className="flex gap-1">
          <button onClick={() => setIsShowAuth(!isShowAuth)} className={`${isShowAuth && 'bg-secondary text-black'} hover:bg-secondary uppercase p-2 border border-secondary rounded-full hover:bg-pri transition-colors hover:text-black`}>
            Mi cuenta
          </button>
          <button onClick={() => setIshowPlayList(!ishowPlayList)} className={`group flex items-center gap-2 uppercase p-2 border border-secondary rounded-full hover:bg-secondary transition-colors hover:text-black ${ishowPlayList && 'bg-secondary text-black'}`}>
            <span className="hidden sm:block">Grabando</span> {tracks.length}
            <PlaylistIcon ishowPlayList={ishowPlayList} />
          </button>
        </div>
      </header>
      <section className=" p-4 mt-10">
        <main className={`${artistListBug ? 'max-w-[320px]  sm:max-w-[562px]' : 'w-[min(528px,_100%)] '}  transition-all mx-auto bg-primary-dark py-8 px-10  rounded-3xl` }>
          {children}
        </main>
      </section>
      {/* Modal para cerrar Sesion */}
      <PopUpAuth isShowAuth={isShowAuth} />
      <PopUpPlayList ishowPlayList={ishowPlayList} />
    </section>
  );
}
export default PrincipalLayout;
