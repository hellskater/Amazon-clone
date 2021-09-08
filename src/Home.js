import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/71WOnoALOFL._SX3000_.jpg"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/61STk08CFwL._SX3000_.jpg"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/71ZpfBLKxSL._SX3000_.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 home__image"
                src="https://m.media-amazon.com/images/I/510Rmi-4XVL._SX3000_.jpg"
                alt="Fourth slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="home__row">
          <Product
            id={1}
            title="Six of Crows: Book 1 | Leigh Bardugo"
            price={406.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/61VyjZAv9gL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />

          <Product
            id={2}
            title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Diamond Drum)"
            price={15999.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/514Rlxjy5qL._SL1500_.jpg"
          />

          <Product
            id={3}
            title="Marvel's Spider Man (PS4) - Game of the Year Edition (PS4)"
            price={1509}
            rating={5}
            image="https://m.media-amazon.com/images/I/81XEnkqC6KL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={4}
            title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
            price={69999}
            rating={4}
            image="https://m.media-amazon.com/images/I/91pi34PiUPL._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={5}
            title="JUAREZ Collé Violin Kit, Full Size 4/4 White Pine Top, Solid Maple Back & Sides, Jujube Pegs, Chinrest & Tailpiece with Hickory Wood Bow,Rosin, Full Tone Sticker, Mute, Bridge, Oblong Case, Dark Brown"
            price={5599}
            rating={3}
            image="https://m.media-amazon.com/images/I/61hjSWKa8vL._SL1500_.jpg"
          />

          <Product
            id={6}
            title="Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card"
            price={239000}
            rating={4}
            image="https://m.media-amazon.com/images/I/81WtQ64-SOL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
