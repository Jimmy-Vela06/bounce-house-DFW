import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../../constants';

import { styles } from '../../styles.js';
import { menu, close, logo } from '../../assets';

const Navbar = () => {
  const [active, setActive] = useState('');

  const [toggle, setToggle] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20  ${scrolled ? 'bg-primary' : 'bg-transparent'}}`}>
      <div className={`w-full flex justify-between items-center max-w-7xl mx-auto px-2 bg-cyan-600/75 rounded-lg`}>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} style={{ width: 100, height: 100 }} alt='logo' className='w-9 h-2 object-contain' />
          <p className='text-white font-bold cursor-pointer text-[16px] md:text-2xl'>
            Bounce House |<span className=''> DFW</span>
          </p>
        </Link>
        <ul className='list-none hidden md:flex flex row gap-5 pr-8'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-black' : 'text-white-900'
              } text-lg  hover:text-white hover:text-xl font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>| {link.title} | </a>
            </li>
          ))}
        </ul>
        <div className='md:hidden flex flex-1 justify-end items-center pr-2'>
          <img src={toggle ? close : menu} alt={menu} className='w-[30px] h-[30px]' onClick={() => setToggle(!toggle)} />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-4 bg-cyan-600/50 absolute top-32 right-2 mx-4 my-0 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex gap-4 justify-end items-start flex-col'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-white'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
