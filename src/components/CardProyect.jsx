import style from './card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ imagen, nombre, descripcion, url }) {
  return (
    <div data-aos="fade-right" className={style.card}>
      <img src={imagen} alt="Descripción de la imagen" />
      <div className={style.info}>
        <div className={style.inf}>
          <h4>{nombre}</h4>
          <p className='mb-10'>{descripcion}</p>
          <a href={url} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
