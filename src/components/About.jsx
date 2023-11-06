export default function About() {
    return (
      <>
        <section className="text-white flex justify-center font-semibold mt-24">
          <div className="flex justify-center w-4/5">
            <div className="grid grid-cols-2 w-4/5 p-10">
              <div className="m-10">
                <img src="../../images/profile-pic.png" alt="Mi foto de perfil" />
              </div>
              <div className="flex justify-center items-center">
                <div>
                  <h2 id="About" className="text-6xl text-center mb-6">
                    Acerca de mí
                  </h2>
                  <p className="text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
                    facere. Repellendus ullam rerum ex, expedita qui labore, id
                    asperiores dolores blanditiis velit consequuntur, repellat odit
                    numquam nam sequi vero aspernatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  