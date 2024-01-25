import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init()
export default function About() {
    return (
      <>
      <div className='text-white w-screen flex flex-col justify-center items-center '>
            <h2 id="About" className=" text-2xl  md:text-6xl text-center mt-6 mb-6 ">
                    Acerca de mí
             </h2>
        <section className=' w-2/3 flex flex-col md:block '>


        <img  src="https://avatars.githubusercontent.com/u/119691309?s=400&u=5ec38e2765ba260900dd8093ad9d3cd644ca350a&v=4" alt="Mi foto de perfil" className=' md:float-left  md:h-56 md:mr-2 mb-6 md:mb-0' />

   
        <p className="lg:text-4xl md:text-2xl text-gray-300 font-medium">
                  Soy Gonzalo, un apasionado desarrollador web full stack con una sólida experiencia en la creación de proyectos tanto en solitario como en equipos colaborativos. Mi enfoque se centra en el desarrollo de aplicaciones web atractivas y funcionales. Estoy capacitado para la creación de Single Page Applications (SPA), lo que significa que puedo desarrollar aplicaciones web interactivas y fluidas que ofrecen una experiencia de usuario excepcional. Mi conjunto de habilidades abarca desde la creación de interfaces de usuario atractivas con HTML, CSS y JavaScript, hasta el desarrollo de servidores y bases de datos robustos para respaldar estas aplicaciones
         </p>

        </section>
      </div>
      </>
    );
  }
  