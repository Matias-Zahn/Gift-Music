import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../Components/ContainerAuth";
import { loginThunk } from "../store/slices/user.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Login() {
  const dispatch= useDispatch()

  const token =useSelector((store) => store.user.token)
  const navigate= useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    dispatch(loginThunk(data))
  };

  useEffect(() => {
    if(token !== ''){
      navigate('/')
    }
  }, [token])

  return (
    <ContainerAuth>
      <div className="hidden md:block">
        <img className="max-w-[400px]" src="/img-logIN.png" alt="" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="[&>label]:grid [&>label]:gap-5 grid gap-6 w-[min(100%,_300px)] mx-auto items-center"
      >
        <h1 className="text-3xl uppercase font-semibold">Iniciar Sesion</h1>
        <label>
          <span className="text-white/40 text-sm"> E-mail </span>
          <input
            className="bg-transparent outline-none border-b border-secondary/50"
            type="email"
            name="email"
          />
        </label>
        <label>
          <span className="text-white/40 text-sm"> Contraseña </span>
          <input
            className="bg-transparent outline-none border-b border-secondary/50"
            type="password"
            name="password"
          />
        </label>

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
    </ContainerAuth>
  );
}

export default Login;
