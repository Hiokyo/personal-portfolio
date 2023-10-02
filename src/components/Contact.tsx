import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

interface Props {
  onSendMessage: (status: boolean) => void
}

const Contact = (props: Props) => {
  const { onSendMessage } = props;
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_h462wqo',
      'template_jzgdwtj', 
      form.current, 
      'yeXjsQGLVQ17JgQ5c'
    )
      .then((result) => {
          console.log(result.text);
          onSendMessage(true)
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* Text */}
          <motion.div 
            className='flex-1 flex justify-start items-center'
            variants={fadeIn('right', 0.3)}
            initial={{opacity: 0, x: -100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial={{opacity: 0, x: 100}}
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3
            }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
            ref={form} 
            onSubmit={sendEmail}
          >
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='Your name'
              name="user_name"
            />
             <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="email"
              placeholder='Your email'
              name="user_email"
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              placeholder='Your message'
              name="message"
            >
            </textarea>
            <button type="submit" className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact