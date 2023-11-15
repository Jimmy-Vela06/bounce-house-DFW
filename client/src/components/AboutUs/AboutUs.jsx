import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { fadeIn, textVariant } from '../../utils/motion';
import { Link } from 'react-router-dom';

import { navLinks } from '../../constants';

import { menu, close, logo } from '../../assets';

import { StartWrapper } from '../../hoc/index';

const AboutUs = () => {
  return (
    <motion.div variants={fadeIn('', '', 0.4, 1)} className='bg-rose-600/75 p-8 rounded-lg m-35'>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>ABOUT US</h2>
        <p className={styles.sectionSubText}>Bounce House DFW</p>
        <p className={styles.sectionSubText}>Make Your Parties Memorable!</p>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='text-white-600 mt-4 text-[17px] max-3-3xl leading-[20px]'>
        Whether you are having a birthday party, corporate event, or just want to have some fun in your backyards we are committed to
        delivering the "WOW" factor every day. We offer a wide range of moonwalks, jumpers, water slides, obstacle courses and bounce house
        rentals in the Dallas-Fort Worth, Texas area. We provide unmatched service, exceptional products at great prices, and have a wide
        selection of party rentals. After ever use we thoroughly inspect and clean our products to insure your rental expierience is
        enjoyable. Our experience and service in our industry helps us to make your event memorable and stress free. We love what we do. Our
        promise is an easy rental experience with great pricing to provide a party you and your visitors will never forget!
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 font-bold sm:text-[16px] text-[14px] text-white-700/70 uppercase tracking-wider'
      >
        Give us a call for booking and product information.
      </motion.p>

      <p className='mt-2 w-full flex justify-start items-center text-cyan-900/40'>CONTACT FORM</p>
      <div className=' w-full flex items-center ml-5 '>
        <a href='#contact'>
          <div className='w-[78px] h-[38px] rounded-3xl border-4 border-white justify-start items-center flex px-2 mt-1'>
            <motion.div
              animate={{
                x: [0, 42, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default StartWrapper(AboutUs, 'about');
