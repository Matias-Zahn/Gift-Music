import { useState } from "react";
import { PencilIcon } from "../Svgs";
import { useDispatch, useSelector } from "react-redux";
import TrackCard from "./TrackCard";
import { axiosMusic } from "../../utils/configAxios";
import { clearTracks } from "../../store/slices/playListCart.slice";

function PopUpPlayList({ ishowPlayList }) {
  const [isShowFront, setIsShowFront] = useState(true);

  const tracks = useSelector((store) => store.playListCart.tracks)

  const dispatch= useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      title: e.target.title.value,
      to: e.target.to.value,
      message: e.target.message.value,
      tracks,
    }

    axiosMusic.post('/api/playlists', data)
      .then(() => {
        e.target.reset()
        dispatch(clearTracks())
        alert('PlayList Creada correctamente')
      })
      .catch((err) => console.log(err))
  }
  return (
    <form
    onSubmit={handleSubmit}
      className={`fixed top-24 z-20  bg-primary-light transition-all  uppercase grid p-4 border border-secondary gap-2 rounded-md ${
        ishowPlayList ? "visible opacity-100 right-16 " : "-right-full"
      }`}
    >
      <div className={`relative casett ${isShowFront ? "front" : "back"} `}>
        {/* Frontal */}
        <div className="front relative">
          <img src="/Casett.png" alt="" />
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] gap-1 text-sm">
            <input
              className="bg-transparent flex-1 text-black outline-none "
              placeholder="Titulo"
              type="text"
              id="title"
              size={10}
            />
            <label htmlFor="title">
              <PencilIcon />
            </label>
          </div>
        </div>
        {/* Trasera */}
        <div className="absolute top-0  back">
          <img src="/Casett.png" alt="" />
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] gap-1 text-sm">
            <input
              className="bg-transparent flex-1 text-black outline-none "
              placeholder="Receptor"
              type="text"
              id="to"
              size={10}
            />
            <label htmlFor="to">
              <PencilIcon />
            </label>
          </div>
          <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[50px] left-[20px] gap-1 text-sm">
            <textarea name='message' className="resize-none text-black" placeholder="Mensaje" rows={4} />
          </div>
        </div>
      </div>
      <button
        className="max-w-max border-2 border-2hite uppercase mx-auto p-2 px-8 rounded-full hover:text-secondary hover:border-secondary transition-colors"
        onClick={() => setIsShowFront(!isShowFront)}
      >
        {isShowFront ? "Lado B" : "Lado A"}
      </button>

      <section className="normal-case w-[230px] max-h-[170px] overflow-y-auto mx-auto">
      {
        tracks.map((track) => <TrackCard key={track.id} track={track} imageSize="sm" showMinusBtn/>)
      }
      </section>

      <button className="max-w-max border-2 border-2hite uppercase mx-auto p-2 px-8 rounded-full hover:text-secondary hover:border-secondary transition-colors">
        {" "}
        Crear
      </button>
    </form>
  );
}
export default PopUpPlayList;
