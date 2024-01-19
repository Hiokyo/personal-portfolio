import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'ReactJs',
    description: 
    `I've successfully executed numerous projects using React JS, creating dynamic web applications and powerful admin interfaces. My proficiency in React enables me to optimize performance and deliver superior user experiences.`,
    link: 'Learn more'
  },
  {
    name: 'VueJs',
    description: 
    `I've provided effective and maintainable solutions for client projects. The flexibility of Vue, combined with my expertise, results in the development of flexible and user-friendly web applications.`,
    link: 'Learn more'
  },
  {
    name: 'UI/UX Design',
    description: 
    `In addition to coding, I excel in UI/UX design, crafting visually appealing and user-friendly interfaces that enhance the overall user experience.`,
    link: 'Learn more'
  },
  {
    name: 'Project Management',
    description: 
    `With extensive experience in Agile Scrum, I ensure efficient collaboration within the team, maintain project timelines, and deliver high-quality products that meet client and market requirements.`,
    link: 'Learn more'
  },
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* Text and image*/}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial={{opacity: 0, x: -100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              I'm a Front-end Developer with over 2 years of experience.
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* Services */}
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
            {/* Services list */}
            <div className=''>
              {
                services.map((service: any, index: number) => {
                  const {name, description, link} = service;
                  return (
                    <div 
                      className='border-b border-white/20 h-[160px] mb-[38px] flex' 
                      key={index}
                    >
                      <div className='max-w-[476px]'>
                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                          { name }
                        </h4>
                        <p className='font-secondary leading-tight'>
                          { description }
                        </p>
                      </div>
                      <div className='flex flex-col flex-1 items-end'>
                        <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                          <BsArrowUpRight />
                        </a>
                        {/* <a href="#" className='text-gradient text-sm'>{ link }</a> */}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Services