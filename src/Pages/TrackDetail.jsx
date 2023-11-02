import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { axiosMusic } from "../utils/configAxios";
import TrackCard from "../Components/shares/TrackCard";
import Loader from "../Components/Loader";
import { ArrowLeftIcon } from "../Components/Svgs";
import PrincipalLayout from "../Components/layout/PrincipalLayout";

function TrackDetail() {
  const [track, setTrack] = useState(null);
  const [isLoandingTracks, setIsLoandingTracks] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoandingTracks(true);
    axiosMusic
      .get(`/api/tracks/${id}`)
      .then(({ data }) => setTrack(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoandingTracks(false));
  }, [id]);
  return (
    <PrincipalLayout>
      {isLoandingTracks ? (
        <Loader />
      ) : (
        <>
          <Link className="group" to={-1}> <ArrowLeftIcon /> </Link>

          <header className="grid gap-4 mb-4 md:grid-cols-2 md:items-center">
            <div>
              <img
                className="block mx-auto rounded-2xl"
                src={track?.album.images[1].url}
                alt=""
              />
            </div>
            <ul className="grid gap-4">
              <li>
                {" "}
                <h4 className="font-semibold"> {track?.name} </h4>{" "}
              </li>
              <li>
                {" "}
                <ul className="flex gap-1 ">
                  {track?.artists.slice(0, 2).map((artist, index, array) => (
                    <li key={artist.id}>
                      {" "}
                      <Link
                        className="hover:text-secondary line-clamp-1 text-white/40 transition-all  duration-300 hover:tracking-wider"
                        to={`/artists/${artist.id}`}
                      >
                        {artist.name} {array.length - 1 !== index && ","}{" "}
                      </Link>{" "}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="text-white/50">
                {" "}
                <span className="font-semibold text-white">Album :</span>{" "}
                {track?.album.name}{" "}
              </li>
              <li className="text-white/50">
                {" "}
                <span className="font-semibold text-white">
                  {" "}
                  Fecha de Salida :
                </span>{" "}
                {track?.album.release_date}{" "}
              </li>
            </ul>
          </header>
          <section>
            <h3 className="font-semibold uppercase p-4">Recomendaciones</h3>
            <div>
              {track?.relatedSongs.map((relatedTrack) => (
                <TrackCard
                  showAddBtn
                  key={relatedTrack.id}
                  track={relatedTrack}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </PrincipalLayout>
  );
}

export default TrackDetail;
