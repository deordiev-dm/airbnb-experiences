import star from "../../public/star.svg";

export default function Card(props) {
  let badge;

  if (props.info.openSpots === 0) {
    badge = <span className="card__status">sold out</span>;
  } else if (props.info.isOnline) {
    badge = <span className="card__status">online</span>;
  }

  return (
    <article className="card">
      <div className="card__image">
        <img src={`../../public/cards/${props.info.coverImg}`} alt="Card main image" />
        {badge}
      </div>
      <div className="card__info info-card">
        <div className="info-card__rating">
          <img src={star} alt="" className="info-card__star" />
          <span className="info-card__points">{props.info.stats.rating}</span>
          <span className="info-card__reviews">({props.info.stats.reviewCount})</span>
          <span className="info-card__country">{props.info.country}</span>
        </div>

        <h3 className="info-card__title">{props.info.title}</h3>

        <div className="info-card__pricing">
          <span className="info-card__price">From ${props.info.price}</span>
          <span className="info-card__entity"> / person</span>
        </div>
      </div>
    </article>
  );
}
