
import NETFLIX_LOGO from '../../src/assets/Netflix_Logo_PMS.png';
const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
      <img src={NETFLIX_LOGO} alt='logo' className='w-44'/>
    </div>
  )
}

export default Header;