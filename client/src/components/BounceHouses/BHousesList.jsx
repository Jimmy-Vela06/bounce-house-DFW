import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../../styles';

import { StartWrapper } from '../../hoc/index';
import { Products, TablesChairs } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';

import Carousel from './Carousel';

const HouseCards = ({ index, name, size, image }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className='bg-cyan-500/90 pl-5 pr-5 pt-4 rounded-2xl sm:w-[480px] w-full '>
        <div>
          <h3 className='text-center text-white font-bold text-[38px]'>{name}</h3>
        </div>
        <div className=' max-w-lg max-h-lg mt-1 flex'>
          <Carousel className='flex justify-center'>
            {image.map((s) => (
              <img key={s} src={s} className='object-contain' />
            ))}
          </Carousel>
        </div>
        {/* <div className='mt-2 pb-3'>
          <p className=' text-center text-white text-[20px]'>Size</p>
          <p className='text-center mt-1 text-white text-[18px]'>{size}</p>
        </div> */}
      </div>
    </motion.div>
  );
};

const BHouseList = () => {
  return (
    <>
      <motion.div variants={fadeIn('', '', 0.1, 0.8)} className='bg-sky-600/75 p-7 rounded-lg'>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>BOUNCE HOUSE'S</h2>
          <p className='text-white-900/75 font-black md:text-[25px] xs:text-[20px] text-[20px]'>Contact Us For Booking</p>
        </motion.div>
      </motion.div>
      <div className='mt-5 grid grid-flow-row auto-rows-max gap-7 justify-center'>
        {Products.map((house, index) => (
          <HouseCards key={`house-${index}`} index={index} {...house} />
        ))}
        <div className='bg-cyan-500/90 pl-5 pr-5 pt-4 rounded-2xl sm:w-[480px] w-full '>
          <div>
            <h3 className='text-center text-white font-bold text-[30px]'>{TablesChairs.name}</h3>
          </div>
          <div className='max-w-lg max-h-lg mt-1 flex justify-center ...'>
            <img src={TablesChairs.image} className='rounded-lg' />
          </div>
          <div className='mt-2 pb-3'>
            <p className=' text-center text-white text-[20px]'>Call to ask for details</p>
          </div>
        </div>
      </div>
    </>
  );
};
console.log(TablesChairs.name);

export default StartWrapper(BHouseList, 'bounce-houses');
