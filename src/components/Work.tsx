import React from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import project1 from '../assets/portfolio-img1.png';
import project2 from '../assets/portfolio-img2.png';
import project3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial={{opacity: 0, x: -100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* Text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Lastest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            {/* Image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={project1} 
                alt="" 
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UI Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial={{opacity: 0, x: 100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='flex-1 flex flex-col gap-y-10'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={project2} 
                alt="" 
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UI Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* Overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Image */}
              <img 
                className='group-hover:scale-125 transition-all duration-500'
                src={project3} 
                alt="" 
              />
              {/* Pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UI Design</span>
              </div>
              {/* Title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work