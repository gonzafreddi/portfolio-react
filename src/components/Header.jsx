
export default function Header() {
    return (
      <>
        <section className="grid grid-cols-2 h-screen font-semibold">
          <div className="flex items-center text-white m-8">
            <div>
              <h1 className="text-8xl">Hola, soy</h1>
              <h1 className="text-white text-8xl">Gonzalo <span>Freddi</span></h1>
              <p className="text-2xl mt-4 mb-4">
                <span>Desarrollador web</span>
                <span className="barra_de_escritura"></span>
              </p>
              <button className="text-2xl text-blue-400 bg-bgviolet/20 p-3 rounded-lg hover:text-white ease-in duration-150 hover-border-bg-blue-900/80">
                Descargar CV
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src='../../images/Codetypingblue.png' alt="Imagen de escritura de código" />
            </div>
          </div>
        </section>
        <div className="arrow flex justify-center relative animate-pulse -mt-20">
          <a href="#About">
            <img src="../../images/flecha.png" alt="" />
          </a>
        </div>
      </>
    );
  }
  