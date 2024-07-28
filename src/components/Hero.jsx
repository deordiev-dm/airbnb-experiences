import photoGrid from "../../public/photo-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__photo-grid">
          <img src={photoGrid} alt="photo grid" />
        </div>
        <div className="hero__text-content">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>
      </div>
    </div>
  );
}
