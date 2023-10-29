function ContainerAuth({ children }) {
  return (
    <main className="bg-dark text-white font-urbanist h-screen grid items-center px-4 bg-[url(/bg-auth-mobile.png)] bg-no-repeat bg-right-bottom md:bg-[url(/bg-auth-desktop.png)] transition-all duration-500">
      <section className="grid md:grid-cols-[auto_400px] gap-10 md:justify-center">
        {children}
      </section>
    </main>
  );
}
export default ContainerAuth;
