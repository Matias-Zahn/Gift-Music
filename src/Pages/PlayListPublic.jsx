import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddIcon, ShareIcon } from "../Components/Svgs";
import PublickLayout from "../Components/layout/PublickLayout";
import SpotifySong from "../Components/shares/SpotifySong";
import TrackCard from "../Components/shares/TrackCard";
import { axiosMusic } from "../utils/configAxios";

function PlayListPublic() {
  const [isShowFront, setIsShowFront] = useState(true);

  const [playlist, setPlaylist] = useState(null);

  const [currentSong, setCurrentSong] = useState(null)

  const { id } = useParams();

  const playTrack= (idTrack) => {
    setCurrentSong(idTrack)
  }


  const sharePlaylist= () => {
    const currentURL= window.location.href
    navigator.clipboard.writeText(currentURL).then(alert('URL copiado en la papelera'))
  }

  useEffect(() => {
    axiosMusic
      .get(`/api/playlists/${id}`)
      .then(({ data }) => setPlaylist(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <PublickLayout>
      <article className=" top-24  mb-5 transition-all grid justify-center  uppercase  gap-2 rounded-md ">
        <div className={`relative casett ${isShowFront ? "front" : "back"} `}>
          {/* Frontal */}
          <div className="front relative">
            <img src="/Casett.png" alt="" />
            <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] gap-1 text-sm">
              <h3 className="bg-transparent flex-1 text-black outline-none ">
                {playlist?.title}{" "}
              </h3>
            </div>
            <div>
              <button
              onClick={sharePlaylist}
                type="button"
                className="absolute bottom-4 right-14 border-2 rounded-full p-[3px]"
              >
                <ShareIcon />
              </button>
              <button className="absolute bottom-3 right-4  rounded-full p-[3px]">
                <AddIcon width="32" height="34" />
              </button>
            </div>
          </div>
          {/* Trasera */}
          <div className="absolute top-0  back">
            <img src="/Casett.png" alt="" />
            <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] gap-1 text-sm">
              <h3 className="bg-transparent flex-1 text-black outline-none ">
                {playlist?.to}{" "}
              </h3>
            </div>
            <div className="bg-white normal-case overflow-y-auto h-[100px] text-black flex p-1 items-center rounded-md w-[197px] absolute top-[50px] left-[20px] gap-1 text-sm">
              <p>{playlist?.message}</p>
            </div>
          </div>
        </div>
        <button
          className="max-w-max border-2 border-2hite uppercase mx-auto p-2 px-8 rounded-full hover:text-secondary hover:border-secondary transition-colors"
          onClick={() => setIsShowFront(!isShowFront)}
        >
          {isShowFront ? "Lado B" : "Lado A"}
        </button>
      </article>
    
    {
      currentSong && <SpotifySong id={currentSong} />
    }

      <section className="mt-6">
        {playlist?.tracks.map((track) => (
          <TrackCard key={track.id} track={track} playBtn={playTrack} />
        ))}
      </section>
    </PublickLayout>
  );
}

export default PlayListPublic;
