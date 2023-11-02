function PublickLayout({ children }) {
  return (
    <section className="bg-dark text-white font-urbanist h-screen overflow-y-scroll  items-center bg-[url(/bg-auth-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/bg-auth-desktop.png)] transition-all duration-500 grid grid-rows-[auto_1fr]">
      <header className="bg-primary-dark flex items-center justify-center p-4  uppercase">
        <h1
          to="/"
          className="font-semibold text-xl  hover:text-secondary hover:tracking-widest transition-all duration-300"
        >
          Gift Music
        </h1>
      </header>
      <section className=" p-4 mt-10">
        <main className="w-[min(562px,_100%)] mx-auto bg-primary-dark py-8 px-10  rounded-3xl">
          {children}
        </main>
      </section>
    </section>
  );
}
export default PublickLayout;
