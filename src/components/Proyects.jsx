
import CardProyect from "./CardProyect.jsx";
import proyectos from "../../proyectos.json";

function Proyects() {
  return (
    <div>
      <h1 className="text-white text-center font-semibold text-4xl m-32">Proyectos</h1>
      <section className="w-full flex justify-center">
        <div className="w-3/5 flex justify-center">
          <div className="flex gap-24">
            {proyectos.proyectos.map((e, index) => (
              <CardProyect
                key={index}
                nombre={e.nombre}
                imagen={e.imagen}
                descripcion={e.descripcion}
                url={e.url}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proyects;
