import avatar from '../assets/avatar.png';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';;
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import resume from '../assets/file/CV_FE_TranTrungHieu.pdf'

const Banner = () => {
  return (
    <section 
      className='min-h-[85vh] lg:min-h[78vh] flex items-center' 
      id='home'
    >
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* Text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)}
              initial={{opacity: 0, y: 100}}
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7
              }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              HIEU 
              <span>
                TRAN
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial={{opacity: 0, y: 100}}
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7
              }}
              className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-3'>I am a</span>
              <TypeAnimation 
                sequence={[
                  'Developer',
                  2000
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial={{opacity: 0, y: 100}}
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7
              }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              Aspire to be a professional Frontend developer through using attained technical knowledge and intense zeal for working in software programming field.
              Additionally, complementing other values to myself in order to accumulate much experiences for future promotion
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial={{opacity: 0, y: 100}}
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.7
              }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Link
                to='contact'
              >
                <button className='btn btn-lg'>Contact me</button>
              </Link>
              <a 
                href={resume} 
                target='_blank' 
                className='text-gradient btn-link'
                rel="noreferrer"
              >
                My Resume
              </a>
            </motion.div>
            {/* Social */}
            <motion.div
               variants={fadeIn('up', 0.7)}
               initial={{opacity: 0, y: 100}}
               whileInView={'show'}
               viewport={{
                 once: false,
                 amount: 0.7
               }} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.facebook.com/hiokyo96" target="_blank">
                <FaFacebook />
              </a>
              <a href="https://github.com/Hiokyo" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hieutran235/" target="_blank">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* Avatar */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial={{opacity: 0, y: -100}}
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={avatar} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner