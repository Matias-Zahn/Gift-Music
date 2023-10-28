import { Link } from "react-router-dom";

function Register() {
  return (
    <main className="bg-dark text-white font-urbanist h-screen grid items-center px-4 bg-[url(/bg-auth-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/bg-auth-desktop.png)] transition-all duration-500">
      <section className="grid md:grid-cols-[auto_400px] gap-10 md:justify-center">
        <div className="hidden md:block">
          <img src="/img-create.png" alt="" />
        </div>
        <form className="[&>label]:grid [&>label]:gap-5 grid gap-6 w-[min(100%,_300px)] mx-auto items-center">
          <h1 className="text-3xl uppercase font-semibold">Cuenta Nueva</h1>
          <label>
            <span className="text-white/40 text-sm"> E-mail </span>
            <input className="bg-transparent border-b border-secondary/50" type="email" />
          </label>

          <label>
            <span className="text-white/40 text-sm"> Nombre de usuario </span>
            <input className="bg-transparent border-b border-secondary/50" type="text" />
          </label>

          <label>
            <span className="text-white/40 text-sm"> Contraseña </span>
            <input className="bg-transparent border-b border-secondary/50" type="password" />
          </label>

          <button className="bg-primary-light py-1 mt-6 px-10 rounded-full max-w-max text-sm uppercase mx-auto font-semibold shadow-lg shadow-purple-400/40 hover:tracking-widest transition-all duration-300" type="submit">Crear</button>
          <Link className="text-center underline" to="/login"> O iniciar sesion </Link>
        </form>
      </section>
    </main>
  );
}

export default Register;
