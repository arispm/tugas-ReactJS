import React from 'react';
import Pokemon from '../../assets/pokemon.jpg';
import Calculator from '../../assets/calculator.jpg';
import Profile1 from '../../assets/profile1.jpg';
import 'tw-elements';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide relative w-[80%] mx-auto my-5" data-bs-ride="carousel">
        <h1 className="text-4xl text-white text-center my-3">My Portofolio</h1>
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <a href="https://arispm.github.io/Poke-API/" target="_blank" rel="noopener noreferrer">
              <img src={Pokemon} className="w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">PokeAPI</h5>
                <p>Simple PokeAPI with ReactJS</p>
              </div>
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="https://arispm.github.io/calculator.github.io/" target="_blank" rel="noopener noreferrer">
              <img src={Calculator} className="w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Calculator</h5>
                <p>Simple calculator with HTML, CSS & JS</p>
              </div>
            </a>
          </div>
          <div class="carousel-item relative float-left w-full">
            <a href="https://arispm.github.io/profile/" target="_blank" rel="noopener noreferrer">
              <img src={Profile1} className="w-full" alt="..." />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="text-xl">Profile</h5>
                <p>Simple profile with HTML & CSS </p>
              </div>
            </a>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="flex  justify-center">
        <Link
          to="/portofolio"
          type="button"
          class="inline-block -my-1 mb-4 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          See For More
        </Link>
      </div>
    </>
  );
};

export default Carousel;
