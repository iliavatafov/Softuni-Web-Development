export default function Card(props) {
  return (
    <div className="movie-container">
      <img src={props.movieImg} alt="Intersteler" className="movie__img" />
      <div className="data-container">
        <a href="#">
          <p className="movie__genre--blue">SCI-FI</p>
        </a>
        <a href="#">
          <h2 className="movie__name">INTERSTELER</h2>
        </a>
        <p className="movie__rating">
          <i className="fa-solid fa-star"></i>
          <span>7.4</span>/10
        </p>
      </div>
    </div>
  );
}
