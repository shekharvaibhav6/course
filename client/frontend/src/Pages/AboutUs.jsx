import React from "react";

import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from '../Assets/Images/aboutMainImage.png'
import apj from "../Assets/Images/QuotesPersonalityImage/apj.png"
import nelsonMandela from "../Assets/Images/QuotesPersonalityImage/nelsonMandela.png"
import billGates from "../Assets/Images/QuotesPersonalityImage/billGates.png"
import einstein from "../Assets/Images/QuotesPersonalityImage/einstein.png"
import steveJobs from "../Assets/Images/QuotesPersonalityImage/steveJobs.png"
function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200"> 
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower in the growth and wellnes of mankind
                        </p>
                    </section>
                    <div className="w-1/2">
                        <img id="test1" style={{
                            filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                        }} src={aboutMainImage} className="drop-shadow-2xl"/>
                    </div>
                </div>
                <div className="carousel m-auto w-1/2 my-16">
                    {/* <CarouselSlide/> */}
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={nelsonMandela}
                alt="Nelson Mandela"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Education is the most powerful tool you can use to change the
                world."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle"> P</a>
              <a href="#slide2" className="btn btn-circle">
              N
              </a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={apj}
                alt="APJ Abdul Kalam"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Learning gives creativity, creativity leads to thinking,
                thinking provides knowledge, knowledge makes you great."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">A. P. J. Abdul Kalam</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
              P
              </a>
              <a href="#slide3" className="btn btn-circle">
               N
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={einstein}
                alt="einstein"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Education is not the learning of facts, but the training of the
                mind to think."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Albert Einstein</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
               P
              </a>
              <a href="#slide4" className="btn btn-circle">
              N
              </a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={steveJobs}
                alt="Steve Jobs"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Innovation distinguishes between a leader and a follower."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Steve Jobs</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
               P
              </a>
              <a href="#slide5" className="btn btn-circle">
                N
              </a>
            </div>
          </div>

          <div id="slide5" className="carousel-item relative w-full">
            <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
              {/* for personality image */}
              <img
                className="w-40 rounded-full border-2 border-gray-400"
                src={billGates}
                alt="Bill Gates"
              />
              {/* for writting the quotes */}
              <p className="text-xl text-gray-200">
                "Technology is just a tool. In terms of getting the kids working
                together and motivating them, the teacher is the most
                important."
              </p>
              {/* for personality name */}
              <h3 className="text-2xl font-semibold">Bill Gates</h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                P
              </a>
              <a href="#slide1" className="btn btn-circle">N
              </a>
            </div>
          </div>
        </div>
            </div>
        </HomeLayout>
    )
}
export default AboutUs;