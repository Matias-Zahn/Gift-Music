import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../store/slices/user.slice";
import { LogOutIcon, NavbPlayIcon } from "../Svgs";

function PopUpAuth({isShowAuth}) {
    

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <nav className={`fixed top-24  bg-primary-light transition-all  uppercase grid p-4 border border-secondary gap-2 rounded-md ${ isShowAuth ? 'visible opacity-100 right-16 ' : '-right-full'}`}>
      <Link
        className=" group flex gap-1 items-center hover:text-[#3E14B5] transition-colors "
        to={"/playlists"}
      >
        {" "}
        <NavbPlayIcon /> Mis grabaciones{" "}
      </Link>
      <button
        onClick={handleLogOut}
        className=" group uppercase flex gap-1 items-center hover:text-[#3E14B5] transition-colors "
      >
        {" "}
        <LogOutIcon /> Cerrar Sesion{" "}
      </button>
    </nav>
  );
}
export default PopUpAuth;
