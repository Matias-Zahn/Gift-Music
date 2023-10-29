import { Link } from "react-router-dom";
import { AddIcon, PlayIcon } from "../Svgs";

function TrackCard({ track }) {
  return (
    <article className="flex gap-4 items-center">
      <div className="w-[58px] h-[58px] rounded-md overflow-hidden">
        <img src={track.album.images[2].url} alt="" />
      </div>
      <div className="flex-1 text-sm grid gap-1">
        <h4 className="font-semibold line-clamp-1">{track.name}</h4>
        <ul className="flex gap-1 line-clamp-1">
          {track.artists.map((artist, index) => (
            <li key={artist.id}>
              {" "}
              <Link to={`/artists/${artist.id}`}>
                {artist.name} {track.artists.length - 1 !== index && ","}{" "}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2 pr-2">
        <button>
          {" "}
          <PlayIcon />{" "}
        </button>
        <button>
          {" "}
          <AddIcon />{" "}
        </button>
      </div>
    </article>
  );
}
export default TrackCard;
