import Card from "./Card";

export default function Slider() {
  return (
    <section className="home-container">
      <div className="slider-movie-container">
        <div className="container">
          <header className="home-header">
            <nav className="nav">
              <div className="nav__logo">
                <a href="#">
                  <img src="./imges/home/logo1.png" alt="" />
                </a>
              </div>
              <ul role="list" className="nav-list">
                <li className="list__item">
                  <a href="#">HOME</a>
                </li>
                <li className="list__item">
                  <a href="#">MOVIES</a>
                </li>
                <li className="list__item">
                  <a href="#">CELEBRITIES</a>
                </li>
                <li className="list__item">
                  <a href="#">BLOG</a>
                </li>
                <li className="list__item">
                  <a href="#">FAVORITES</a>
                </li>
              </ul>
              <ul role="list" className="nav-authentincation-list">
                <li className="list__item--btn--transperant">
                  <a className="login-btn" href="#">
                    LOG IN
                  </a>
                </li>
                <li className="list__item-btn--red">
                  <a className="singup-btn--red" href="#">
                    SING UP
                  </a>
                </li>
              </ul>
              <a href="#" className="nav-btn">
                <i className="fa-solid fa-bars"></i>
              </a>
            </nav>
            <div className="top-search">
              <select>
                <option value="movies">MOVIES</option>
                <option value="tv-shows">TV SHOWS</option>
                <option value="others">OTHERS</option>
              </select>
              <input
                type="text"
                placeholder="Search for a movie, TV Show or celebrity that you are looking for"
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </header>

          <div className="movie-items-slider">
            <div className="social-links">
              <p>FOLLOW US:</p>
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
            <div className="slider-container">
              <Card movieImg="./imges/home/intersteller-test.jpg" />
              <Card movieImg="./imges/home/intersteller-test.jpg" />
              <Card movieImg="./imges/home/intersteller-test.jpg" />
              <Card movieImg="./imges/home/intersteller-test.jpg" />
            </div>
            <ul role="list" className="slider-manipulator-list">
              <li className="slider-malipulator__item">
                <button className="slider-manipulator__btn--yellow"></button>
              </li>
              <li className="slider-malipulator__item">
                <button className="slider-manipulator__btn"></button>
              </li>
              <li className="slider-malipulator__item">
                <button className="slider-manipulator__btn"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
