import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({threshold: 0.5})

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* Image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial={{opacity: 0, x: -100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='bg-about flex-1 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          >
          </motion.div>
          {/* Text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial={{opacity: 0, x: 100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I'm a Front-end Developer with over 2 years of experience.</h3>
            <p className='mb-6'>
              I specialize in using React JS and Vue JS. 
              My expertise extends beyond programming to include popular UI frameworks such as Ant Design and Tailwind.
              I'm committed to delivering innovative and high-quality solutions for every project,
              always ready to face new challenges to continuously enhance my skills and knowledge. 
            </p>
            {/* Stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? 
                    <CountUp start={0} end={2} duration={3}/>
                    : null
                  }
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? 
                    <CountUp start={0} end={5} duration={3}/>
                    : null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Individual projects <br />
                  Compeleted
                </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  { inView ? 
                    <CountUp start={0} end={4} duration={3}/>
                    : null
                  }
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects get <br />
                  Involved
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <Link to='contact'>
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a href="#" className='text-gradient btn-link'>
                My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About