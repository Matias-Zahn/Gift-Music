import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PrincipalLayout from "../Components/layout/PrincipalLayout";
import { axiosMusic } from "../utils/configAxios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProgressBar from "../Components/layout/Starts";
import TrackCard from "../Components/shares/TrackCard";
import { ArrowLeftIcon } from "../Components/Svgs";
import Loader from "../Components/Loader";
function ArtistDetail() {
  const [artistInfo, setArtistInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axiosMusic
      .get(`/api/artists/${id}`)
      .then(({ data }) => setArtistInfo(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <PrincipalLayout artistListBug>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Link className="flex gap-2 text-secondary" to={-1}>
            {" "}
            <ArrowLeftIcon /> Atras{" "}
          </Link>
          <header className="flex flex-col md:flex-row justify-center items-center gap-8 p-10 font-bold">
            <img
              className="rounded-full max-w-[180px]"
              src={artistInfo?.images[1].url}
              alt=""
            />
            <div className="grid gap-2 place-items-center md:place-items-baseline">
              <h3 className="text-xl ">{artistInfo?.name}</h3>
              <h5>
                Seguidores:{" "}
                <span>{(artistInfo?.followers.total / 1000).toFixed(0)}K</span>{" "}
              </h5>

              <div className="text-sm">
                <h4>Popularidad:</h4>
                <ProgressBar rating={artistInfo?.popularity} />
              </div>
              <h4>Generos: </h4>
              <ul className="flex text-sm flex-wrap gap-2 uppercase">
                {artistInfo?.genres.map((genre) => (
                  <li className="border p-2 px-3 rounded-3xl" key={genre}>
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </header>

          <section className=" cursor-pointer hover:bg-secondary/20 transition-colors p-4 rounded-xl">
            <Swiper
              className="mySwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                500: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
            >
              {artistInfo?.albums.map((album) => (
                <SwiperSlide key={album.id}>
                  <article className=" text-sm grid gap-[2px]">
                    <header className=" rounded-xl max-w-[200px]">
                      <img src={album.images[1].url} alt="" />
                    </header>
                    <h5 className="line-clamp-1 font-semibold">{album.name}</h5>
                    <span className="line-clamp-1 text-white/40">
                      {album.artists[0].name}
                    </span>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="mt-5">
            {artistInfo?.songsTop.map((song) => (
              <TrackCard key={song.id} track={song} />
            ))}
          </section>
        </>
      )}
    </PrincipalLayout>
  );
}

export default ArtistDetail;
