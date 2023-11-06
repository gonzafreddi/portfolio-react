import style from './card.module.css'

// eslint-disable-next-line react/prop-types
function Card({ imagen, nombre, descripcion, url }) {
  return (
    <div className={style.card}>
      <img src={imagen} alt="Descripción de la imagen" />
      <div className={style.info}>
        <div className={style.inf}>
          <h4>{nombre}</h4>
          <p>{descripcion}</p>
          <a href={url} className={style.button}>
            Más detalles
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
