import { useEffect, useState } from "react";
import PrincipalLayout from "../Components/layout/PrincipalLayout";
import { SearchIcon } from "../Components/Svgs";
import TracksList from "../Components/shares/TracksList";
import { axiosMusic } from "../utils/configAxios";
import Loader from "../Components/Loader";

function Home() {
  const [tracksRecomendations, setTracksRecomendations] = useState([]);
  const [searchTrack, setSearchTrack] = useState([]);

  const [isLoandingTracks, setIsLoandingTracks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const limit = formData.get("limit");
    const query = formData.get("query");

    if (query.length !== 0) {
      axiosMusic
        .get(`/api/tracks?limit=${limit}&q=${query}`)
        .then(({ data }) => setSearchTrack(data.tracks.items))
        .catch((err) => console.log(err));
    } else return;
  };

  useEffect(() => {
    setIsLoandingTracks(true);
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=hip-hop,chill")
      .then(({ data }) => setTracksRecomendations(data.tracks))
      .catch((err) => console.log(err))
      .finally(() => setIsLoandingTracks(false));
  }, []);

  return (
    <PrincipalLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 outline-none  p-4 flex gap-2 rounded-md"
        action=""
      >
        <button>
          <SearchIcon />
        </button>
        <input
          className="bg-transparent outline-none flex-1"
          size={8}
          placeholder="Buscar"
          type="text"
          name="query"
          autoComplete="off"
        />
        <select
          name="limit"
          className="bg-transparent outline-none [&>option]:text-black "
          id=""
        >
          <option>10</option>
          <option>13</option>
          <option>16</option>
          <option>20</option>
        </select>
      </form>

      {
        isLoandingTracks ? <Loader /> : <TracksList
        tracks={searchTrack.length !== 0 ? searchTrack : tracksRecomendations}
      />
      }
    </PrincipalLayout>
  );
}

export default Home;
