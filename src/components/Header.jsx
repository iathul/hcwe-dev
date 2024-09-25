import { useState } from 'react';
import logo from '../assets/img/logo.png';
import {ReactComponent as Menu} from '../assets/img/menu.svg';

export default function Header({ menuItems, activeSection }) {
const [menuOpen, setMenuOpen] = useState(false);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMenuClick = () => {setMenuOpen(prev=>!prev)}

  return (
    <div className="header z-10 fixed w-screen bg-primary py-4 px-6 text-light flex items-center justify-between">
      <img src={logo} alt="logo" className='logo h-[40px]' />
      <Menu className='block md:hidden h-[40px] text-light' onClick={handleMenuClick}/>
      <nav className={`${menuOpen ? 'top-[70px] opacity-100' : 'top-[50px] opacity-0 pointer-events-none'} fixed md:top-0 right-0 md:pointer-events-auto transition-all duration-100  p-10 md:opacity-100 md:p-0 bg-primary w-full md:w-fit md:bg-transparent md:relative gap-2 flex flex-col md:flex-row`}>
        {menuItems.map((item, idx) => (
          <span
            className={`cursor-pointer px-2 py-1 rounded-2xl transition-all ease-in-out duration-300 ${
              activeSection === item.label
                ? 'bg-light text-dark'
                : 'hover:bg-light hover:text-dark'
            }`}
            key={idx}
            onClick={() => scrollToRef(item.ref)}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </div>
  )
}