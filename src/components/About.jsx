import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
export default function About() {
	return (
		<>
			<div className="text-white w-screen flex flex-col justify-center items-center  mt-6 ">
				<h2
					id="About"
					className=" text-2xl  md:text-6xl text-center mt-6 mb-6 "
				>
					Acerca de mí
				</h2>
				<section className="w-2/3 min-auto flex flex-col md:flex-row items-center justify-center text-center">
					<img
						src="https://avatars.githubusercontent.com/u/119691309?s=400&u=5ec38e2765ba260900dd8093ad9d3cd644ca350a&v=4"
						alt="Mi foto de perfil"
						className="md:h-56 md:mr-2 mb-6 md:mb-0"
					/>
					<div className="flex flex-col justify-center flex-1">
						<p className="lg:text-2xl md:text-xl text-gray-300 font-sans font-extralight p-4">
							Desarrollador Full Stack con experiencia en Python, React, Odoo,
							Django, Ionic-Angular, Node y PostgreSQL. Apasionado por el
							desarrollo de software, la optimización de sistemas y la mentoría
							de nuevos compañeros. Cuento con habilidades en el diseño y
							desarrollo de soluciones escalables, integración de sistemas y
							mantenimiento de aplicaciones.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
