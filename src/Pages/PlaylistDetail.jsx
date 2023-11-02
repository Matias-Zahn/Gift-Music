import { Link, useNavigate, useParams } from "react-router-dom";
import PrincipalLayout from "../Components/layout/PrincipalLayout";
import {
  PencilIcon,
  SavedIcon,
  ShareIcon,
  TrashIcon,
} from "../Components/Svgs";
import { useEffect, useRef, useState } from "react";
import { axiosMusic } from "../utils/configAxios";
import TrackCard from "../Components/shares/TrackCard";

function PlaylistDetail() {
  const [isShowFront, setIsShowFront] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const formRef = useRef(null);
  const { id } = useParams();

  const navigate= useNavigate()
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      to: e.target.to.value,
      message: e.target.message.value,
    };

    axiosMusic
      .patch(`/api/playlists/${id}`, data)
      .then(({ data }) => console.log(data))
      .then((err) => console.log(err));
  };

  const deletePlaylistTrack = (trackId) => {
    axiosMusic
      .delete(`/api/playlists/${playlist.id}/tracks/${trackId}`)
      .then(() => {
        const playlistCopy= structuredClone(playlist)
        playlistCopy.tracks = playlistCopy.tracks.filter((track) => track.id !== trackId)
        setPlaylist(playlistCopy)
      })
      .catch((err) => console.log(err));
  };


  const deletePlaylist= () => {
    axiosMusic.delete(`/api/playlists/${playlist.id}`)
      .then(() => {
        alert('PlayList eliminada')
        navigate('/playlists')
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => {
        setPlaylist(data);
        formRef.current.message.value = data.message;
        formRef.current.title.value = data.title;
        formRef.current.to.value = data.to;
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <PrincipalLayout>
      <Link to={-1}> {"<"} Atras</Link>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className=" top-24  mb-5 transition-all grid justify-center  uppercase  gap-2 rounded-md "
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
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="absolute bottom-4 left-5 border-2 rounded-full p-[3px]"
              >
                <SavedIcon />
              </button>
              <button
              onClick={deletePlaylist}
                type="button"
                className="absolute bottom-4 left-[60px] border-2 rounded-full p-[3px]"
              >
                <TrashIcon />
              </button>
              <Link
              to={`/playlist/public/${playlist?.id}`}
                type="button"
                target="_blank"
                className="absolute bottom-4 right-5 border-2 rounded-full p-[3px]"
              >
                <ShareIcon />
              </Link>
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
            <div className="bg-white text-black flex p-1 items-center rounded-md w-[197px] absolute top-[50px] left-[20px] gap-1 text-sm">
              <textarea
                name="message"
                className="resize-none"
                placeholder="Mensaje"
                rows={4}
              />
            </div>
          </div>
        </div>
        <button
          className="max-w-max border-2 border-2hite uppercase mx-auto p-2 px-8 rounded-full hover:text-secondary hover:border-secondary transition-colors"
          onClick={() => setIsShowFront(!isShowFront)}
        >
          {isShowFront ? "Lado B" : "Lado A"}
        </button>
      </form>
      <section>
        {playlist?.tracks.map((track) => (
          <TrackCard
            track={track}
            key={track.id}
            deleteBtn={deletePlaylistTrack}
          />
        ))}
      </section>
    </PrincipalLayout>
  );
}

export default PlaylistDetail;
