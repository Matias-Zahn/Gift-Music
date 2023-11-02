import { Link } from "react-router-dom";
import { PencilIcon } from "../Svgs";

function PlaylistCard({ playlist, index }) {
  const top = `${index * 50}px`;
  return (
    <li
      style={{ top: top }}
      className="hover:rotate-12 hover:-translate-y-2 transition-transform absolute text-black font-bold"
    >
      <Link to={`/playlists/${playlist.id}`}>
        <div>
          <img src="/Casett.png" alt="casett" />
        </div>
        <div className="bg-white flex p-1 items-center rounded-md w-[197px] absolute top-[15px] left-[20px] gap-1 text-sm">
          <h4 className="flex-1 line-clamp-1">{playlist.title} </h4>
          <PencilIcon />
        </div>
      </Link>
    </li>
  );
}
export default PlaylistCard;
