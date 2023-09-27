import logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Header = () => {
  

  return (
    <header
      className='py-8'
    >
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='w-40 h-auto' src={logo} alt=''></img>
          </a>
          
          <Link
            to='contact'
            smooth={true}
            spy={true}
          >
            <button className='btn btn-sm'>Work with me</button>
          </Link>

        </div>
      </div>
    </header>
  )
}

export default Header