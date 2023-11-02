import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../Components/ContainerAuth";
import Loader from "../Components/Loader";
import { loginThunk } from "../store/slices/user.slice";

function Login() {
  const dispatch = useDispatch();

  const token = useSelector((store) => store.user.token);
  const isLoading = useSelector((store) => store.user.isLoading);
  const isRegister = useSelector((store) => store.user.isRegister);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(loginThunk(data));
  };

  useEffect(() => {
    if (token !== "") {
      navigate("/");
    }
  }, [token]);





  return (
    <ContainerAuth >
      {isLoading ? (
        <Loader absolute />
      ) : (
        <>
          <div className="hidden md:block">
            <img className="max-w-[400px]" src="/img-logIN.png" alt="" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="[&>label]:grid [&>label]:gap-5 grid gap-5 w-[min(100%,_300px)] mx-auto items-center"
          >
            <h1 className="text-3xl uppercase font-semibold">Iniciar Sesion</h1>
            <label>
              <span className="text-white/40 text-sm"> E-mail </span>
              <input
                className="bg-transparent outline-none border-b border-secondary/50"
                type="email"
                name="email"
                required
              />
            </label>
            {isRegister && <span className="text-sm text-red-500">El correo es incorrecto o invalido </span>}
            <label>
              <span className="text-white/40 text-sm"> Contraseña </span>
              <input
                className="bg-transparent outline-none border-b border-secondary/50"
                type="password"
                name="password"
                required
              />
            </label>
            {isRegister && <span className="text-sm text-red-500">La contraseña es incorrecta </span>}
            <button
              className="bg-primary-light py-1 mt-6 px-10 rounded-full max-w-max text-sm uppercase mx-auto font-semibold shadow-lg shadow-purple-400/40 hover:tracking-widest transition-all duration-300"
              type="submit"
            >
              Entrar
            </button>
            <Link className="text-center underline" to="/register">
              {" "}
              O registrarse{" "}
            </Link>
          </form>
        </>
      )}
    </ContainerAuth>
  );
}

export default Login;
