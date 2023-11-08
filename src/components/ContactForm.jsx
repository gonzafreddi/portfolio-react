import { useState } from "react";
function ContactSection() {
const [info, setInfo] = useState({
    name: '', 
    email: '', 
    message: ''
})

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(info);
    const response = await fetch('https://formspree.io/f/mrgwdlpp', {
      method: 'POST',
      body: JSON.stringify(info), // Convierte el objeto info a JSON
      headers: {
        'Content-Type': 'application/json', // Asegura que se envía JSON
      },
    });
    console.log(response, 'response');
    if (response.ok) {
      alert('Gracias por contactarme, te responderé pronto');
    }
  };

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };
  return (
    <section className="flex justify-center py-20 lg:py-[120px] overflow-hidden relative z-10 p-10">
      <div className="container">
        <div className="flex flex-wrap lg:justify-between -mx-4">
          <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
            <div className="max-w-[570px] mb-12 lg:mb-0">
              <span className="block mb-4 text-base text-primary font-semibold">
                Contact Us
              </span>
              <h2 className="text-white mb-6 uppercase font-bold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="leading-relaxed mb-9 text-slate-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/gonzalo-freddi-39866a252/" rel="noreferrer" target="_blank">
                  <img className="w-10 md:w-14" src="https://cdn-icons-png.flaticon.com/256/3536/3536505.png" alt="" />
                </a>
                <a href="https://github.com/gonzafreddi">
                  <img className="w-10 md:w-14" src="https://cdn-icons-png.flaticon.com/256/5968/5968866.png" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
            <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <form action="https://formspree.io/f/mrgwdlpp" method="POST" id="form" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    onChange={handleChange}
                    name="email"
                    placeholder="Your Email"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows="6"
                    name="message"
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                  ></textarea>
                </div>
                <div>
                <button
                type="submit"
                className="w-full
                text-white
                bg-blue-900
                rounded
                border border-primary
                p-3
                transition
                hover:bg-opacity-90"
                >
                    Enviar mensaje
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
