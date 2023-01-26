import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="bg-gray-900" id="home">
        <section class="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/aris3.jpg)' }}>
          <div class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/75 sm:to-black/20"></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center sm:text-left">
              <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                Hi, I'm
                <strong class="block font-extrabold text-blue-500">Aris Putra Madya</strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">Welcome to my personal website!</p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <Link to="/contact" class="block w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                  Contact Me
                </Link>

                <Link to="/about" class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 shadow hover:text-blue-900 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                  About Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
