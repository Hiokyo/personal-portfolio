import { useEffect, useState } from "react"
import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Work from "./components/Work"

import { motion } from 'framer-motion';
import { fadeIn } from './variants';

function App() {
  const [sendMessageStatus, setSendMessageStatus] = useState(false);

  useEffect(() => {
    if (sendMessageStatus) {
      const timeoutId = setTimeout(() => {
        setSendMessageStatus(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [sendMessageStatus]);
 
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      { sendMessageStatus && (
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial={{opacity: 0, x: 100}}
          animate= {{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0, x: -100
          }}
          className="fixed flex items-center w-full max-w-xs p-4 opacity-90 space-x-4 gradient divide-x rounded-lg shadow top-5 right-5 space-x" 
          role="alert"
        >
          <div className="text-base font-normal">I have received your information, I will contact you as soon as possible</div>
        </motion.div> 
      )}
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Services />
      <Work />
      <Contact
        onSendMessage={setSendMessageStatus}
      />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
