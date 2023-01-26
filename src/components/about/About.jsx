import React from 'react';
import aris6 from '../../assets/aris6.jpg';

const About = () => {
  return (
    <>
      {/* <!-- component --> */}
      <div class="flex flex-wrap md items-center h-screen" id="about">
        <div class="bg-gray-900 w-full md:w-1/2 h-screen">
          <div class="mx-32">
            <h1 class="text-6xl font-bold mt-16 text-gray-100">About Me</h1>

            {/* <!-- country region island --> */}
            <div class="flex mt-16 font-light text-gray-400">
              <div class="pr-4">
                <span class="uppercase">Country</span>
                <p class="text-2xl text-gray-400 font-semibold pt-2">Indonesia</p>
              </div>
              <div class="pr-4">
                <span class="uppercase">Region</span>
                <p class="text-2xl text-gray-400 font-semibold pt-2">East Java</p>
              </div>
            </div>

            {/* <!-- description --> */}
            <div class="description w-full sm: md:w-2/3 mt-16 text-gray-300 text-xl text-justify">
              I'm bachelor of communication science and also a selftaught programmer, I'm very interested in IT especialy web development. Have bootcamp experience. Hardworking, creative, and able to work in teams.
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 h-screen">
          <img src={aris6} class="h-screen w-full object-cover" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
