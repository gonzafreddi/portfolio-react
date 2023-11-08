import CardSkills from "./CardSkills";
import skills from "../../skills.json";
import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init()

export default function Skills() {
  return (
    <>
      <section  data-aos="fade-up" className="flex justify-center">
        <div className="w-4/5 p-10 flex justify-center">
          <div>
            <h2 className="text-white text-4xl font-semibold text-center mb-10 " >
              Tecnologias
            </h2>
            <div className="w-screen grid grid-cols-3 md:grid-cols-5 md:gap-24 md:w-auto gap-10 p-10">
              {skills.technologies.map((e, index) => (
                <CardSkills key={index} image={e.image} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
