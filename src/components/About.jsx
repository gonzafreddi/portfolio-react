import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init()
export default function About() {
    return (
      <>
        <section data-aos="fade-up"className="text-white flex justify-center font-semibold mt-24  h-screen items-center ">
          <div className="flex justify-center md:w-4/5">
            <div className="grid md:grid-cols-2 w-4/5 md:p-6">
              <div className="m-10  h-40 w-sreen mb-16">
                <img src="../../images/profile-pic.png" alt="Mi foto de perfil" />
              </div>
              <div className="flex justify-center items-center ">
                <div>
                  <h2 id="About" className=" text-2xl  md:text-6xl text-center mt-6 mb-6">
                    Acerca de mí
                  </h2>
                  <p className="md:text-2xl">
                  Soy Gonzalo, un apasionado desarrollador web full stack con una sólida experiencia en la creación de proyectos tanto en solitario como en equipos colaborativos. Mi enfoque se centra en el desarrollo de aplicaciones web atractivas y funcionales. Estoy capacitado para la creación de Single Page Applications (SPA), lo que significa que puedo desarrollar aplicaciones web interactivas y fluidas que ofrecen una experiencia de usuario excepcional. Mi conjunto de habilidades abarca desde la creación de interfaces de usuario atractivas con HTML, CSS y JavaScript, hasta el desarrollo de servidores y bases de datos robustos para respaldar estas aplicaciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  