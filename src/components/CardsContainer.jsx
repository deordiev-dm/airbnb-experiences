import data from "../data";
import Card from "./Card";

export default function CardsContainer() {
  const cardElements = data.map((info) => {
    return <Card info={info} />;
  });

  return (
    <div className="cards">
      <div className="cards__container">{cardElements}</div>
    </div>
  );
}
