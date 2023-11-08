import style from './header.module.css'

export default function Header() {
    return (
      <>
        <section data-aos="fade-up"  className=" grid md:grid md:grid-cols-2 h-screen w-screen font-semibold ">
          <div className="flex items-center text-white ">
            <div className=" w-screen text-center">
              <h1 className="text-4xl md:text-8xl pl-4">Hola, soy</h1>
              <h1 className="text-white flex justify-center text-4xl md:text-8xl pl-4"><span className={style.animated}>Gonzalo Freddi</span></h1>
              <p className=" md:text-2xl mt-4 mb-4">
                <span className="md:text-2xl pl-4">Desarrollador web</span>

              </p>
              <a target="_blank" href="https://docs.google.com/document/d/1CA6hbpwH2HuUGeiLyY1DieKExFN9uwKm/edit?usp=sharing&ouid=105461425200079326396&rtpof=true&sd=true" className="md:text-2xl text-blue-400 bg-bgviolet/20  rounded-lg hover:text-white ease-in duration-150 hover-border-bg-blue-900/80 pl-4" rel="noreferrer">
                Ver CV
              </a>
            </div>
          </div>
          <div className="flex items-center pr-4 -mt-10 md:-mt-0 md:h-auto h-56">
            <div>
              <img src='../../images/Codetypingblue.png' alt="Imagen de escritura de código" />
            </div>
          </div>
        </section>
        <div className="arrow flex justify-center relative animate-pulse md:-mt-20 -mt-40">
          <a href="#About">
            <img src="../../images/flecha.png" alt="" />
          </a>
        </div>
      </>
    );
  }
  