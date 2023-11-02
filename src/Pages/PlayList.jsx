import { useEffect, useState } from "react";
import PrincipalLayout from "../Components/layout/PrincipalLayout";
import { SearchIcon } from "../Components/Svgs";
import { axiosMusic } from "../utils/configAxios";
import PlayListLists from "../Components/PlayLists/PlayListLists";
import Loader from "../Components/Loader";

function PlayList() {
  const [playLists, setPlayLists] = useState([])
  const [isLoandingTracks, setIsLoandingTracks] = useState(false);
  
  useEffect(() => {
    setIsLoandingTracks(true)
    axiosMusic.get('/api/playlists/me')
    .then(({data}) => setPlayLists(data))
    .catch((err) => console.log(err))
    .finally(() => setIsLoandingTracks(false))
  }, [])

  return (
    <PrincipalLayout>
      <form
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
      </form>
      {
        isLoandingTracks ? <Loader /> : <PlayListLists playLists={playLists} />
      }
    </PrincipalLayout>
  );
}

export default PlayList;
