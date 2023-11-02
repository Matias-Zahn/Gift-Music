import { Link } from "react-router-dom";
import { AddIcon, MinuIcon, PlayIcon } from "../Svgs";
import { addTrack, removeTrack } from "../../store/slices/playListCart.slice";
import { useDispatch } from "react-redux";

function TrackCard({
  deleteBtn,
  track,
  showPlayBtn,
  showAddBtn,
  imageSize = "base",
  showMinusBtn,
  playBtn,
}) {
  const dispatch = useDispatch();

  const handleAddTrack = () => {
    dispatch(addTrack(track));
  };

  const handleRemoveTrack = () => {
    dispatch(removeTrack(track.id));
  };

  const imageSizes = {
    base: "w-[60px] h-[60px]",
    sm: "w-[45px] h-[45px]",
  };

  return (
    <article className="flex gap-4 items-center hover:bg-white/20 transition-colors p-1  rounded-md">
      <div className={` rounded-md overflow-hidden  ${imageSizes[imageSize]}`}>
        <img src={track.album.images[2].url} alt="" />
      </div>
      <div className="flex-1 text-sm grid gap-1">
        <Link
          to={`/tracks/${track.id}`}
          className="duration-300 hover:tracking-wider hover:text-secondary transition-all font-semibold line-clamp-1"
        >
          {track.name}
        </Link>
        <ul className="flex gap-1 ">
          {track.artists.slice(0, 2).map((artist, index, array) => (
            <li key={artist.id}>
              {" "}
              <Link
                className="hover:text-secondary line-clamp-1 transition-all  duration-300 hover:tracking-wider"
                to={`/artists/${artist.id}`}
              >
                {artist.name} {array.length - 1 !== index && ","}{" "}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 pr-2">
        {showPlayBtn && (
          <button>
            {" "}
            <PlayIcon />{" "}
          </button>
        )}
        {showAddBtn && (
          <button onClick={handleAddTrack}>
            {" "}
            <AddIcon />{" "}
          </button>
        )}

        {showMinusBtn && (
          <button onClick={handleRemoveTrack}>
            <MinuIcon />
          </button>
        )}
        {deleteBtn && (
          <button onClick={() => deleteBtn(track.id)}>
            <MinuIcon />
          </button>
        )}
        {playBtn && (
          <button onClick={() => playBtn(track.spotifyId)}>
            {" "}
            <PlayIcon />{" "}
          </button>
        )}
      </div>
    </article>
  );
}
export default TrackCard;
