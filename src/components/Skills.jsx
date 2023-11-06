import CardSkills from "./CardSkills";
import skills from "../../skills.json";

export default function Skills() {
  return (
    <>
      <section className="flex justify-center">
        <div className="w-4/5 p-10 flex justify-center">
          <div>
            <h2 className="text-white text-4xl font-semibold text-center mb-10">
              Habilidades
            </h2>
            <div className="grid grid-cols-5 gap-24">
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
