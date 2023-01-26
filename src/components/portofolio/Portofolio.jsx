import React from 'react';
import Pokemon from '../../assets/pokemon.jpg';
import Calculator from '../../assets/calculator.jpg';
import Profile1 from '../../assets/profile1.jpg';
import Profile2 from '../../assets/profile2.jpg';
import Restaurant from '../../assets/restaurant.jpg';
import Cakeshop from '../../assets/cakeshop.jpg';

const Portofolio = () => {
  const links = [
    {
      id: 1,
      href: 'https://arispm.github.io/Poke-API/',
      sc: 'https://github.com/arispm/Poke-API',
      judul: 'PokeAPI',
      tech: 'Tech: ReactJS',
      img: Pokemon,
    },
    {
      id: 2,
      href: 'https://arispm.github.io/calculator.github.io/',
      sc: 'https://github.com/arispm/calculator.github.io',
      judul: 'Calculator',
      tech: 'Tech: HTML,CSS & JS',
      img: Calculator,
    },
    {
      id: 3,
      href: 'https://arispm.github.io/profile/',
      sc: 'https://github.com/arispm/profile',
      judul: 'Simple Profile 1',
      tech: 'Tech: HTML & CSS',
      img: Profile1,
    },
    {
      id: 4,
      href: 'https://arispm.github.io/portofoliobs/',
      sc: 'https://github.com/arispm/portofoliobs',
      judul: 'Simple Profile 2',
      tech: 'Tech: Bootstrap',
      img: Profile2,
    },
    {
      id: 5,
      href: 'https://restaurant-murah.github.io/restoran/',
      sc: 'https://github.com/Restaurant-Murah/restoran',
      judul: 'Restaurant Murah',
      tech: 'Tech: HTML & CSS',
      img: Restaurant,
    },
    {
      id: 6,
      href: 'https://a13-progatehtmlcss.github.io/cake.shop/',
      sc: 'https://github.com/A13-ProgateHTMLCSS/cake.shop',
      judul: 'Cake Shop',
      tech: 'Tech: HTML & CSS',
      img: Cakeshop,
    },
  ];

  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">My Portfolio</h1>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            {links.map(({ id, judul, tech, img, href, sc }) => (
              <div class="flex items-end overflow-hidden bg-cover rounded-lg h-96" key={id} style={{ backgroundImage: `url(${img})` }}>
                <div class="w-full flex justify-between items-center px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                  <div>
                    <h2 class="mt-4 text-2xl font-semibold text-gray-800 capitalize dark:text-white">{judul}</h2>
                    <p class="mt-2 text-lg tracking-wider text-blue-600 uppercase dark:text-blue-400 ">{tech}</p>
                  </div>
                  <div>
                    <a
                      type="button"
                      class="mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-center"
                      href={href}
                      target="_blank"
                    >
                      Visit Link
                    </a>
                    <a
                      type="button"
                      class="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-200 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-center"
                      href={sc}
                      target="_blank"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portofolio;
