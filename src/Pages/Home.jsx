import { useEffect, useState } from "react";
import { PlaylistIcon, SearchIcon } from "../Components/Svgs";
import { axiosMusic } from "../utils/configAxios";
import TracksList from "../Components/shares/TracksList";

function Home() {
  const [tracksRecomendations, setTracksRecomendations] = useState([])
  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=hip-hop,chill")
      .then(({ data }) => setTracksRecomendations(data.tracks))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-dark text-white font-urbanist h-screen overflow-y-scroll  items-center bg-[url(/bg-auth-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/bg-auth-desktop.png)] transition-all duration-500 grid grid-rows-[auto_1fr]">
      <header className="bg-primary-dark flex items-center justify-between p-4  uppercase">
        <h1 className="font-semibold text-xl">Gift Music</h1>

        <div className="flex gap-2 ">
          <button className="uppercase p-2 border border-secondary rounded-full hover:bg-secondary transition-colors hover:text-black">
            Mi cuenta
          </button>
          <button className="flex items-center gap-2 uppercase p-2 border border-secondary rounded-full hover:bg-secondary transition-colors hover:text-black">
            <span className="hidden sm:block">Grabando</span>
            <PlaylistIcon />
          </button>
        </div>
      </header>

      <section className="px-2 p-4 mt-10">
        <main className="w-[min(562px,_100%)] mx-auto bg-primary-dark py-8 px-10  rounded-3xl">
          <form
            className="bg-white/10 outline-none px-2 p-2 flex gap-2 rounded-md"
            action=""
          >
            <button>
              <SearchIcon />
            </button>
            <input
              className="bg-transparent outline-none flex-1"
              size={10}
              placeholder="Buscar"
              type="text"
            />
            <select className="bg-transparent outline-none" name="" id="">
              <option value="">1</option>
            </select>
          </form>
          
          <TracksList tracks={tracksRecomendations} />
        </main>
      </section>
    </section>
  );
}

export default Home;
