import { motion } from 'framer-motion';

// import { styles } from '../../styles';
import { BounceHouseCanvas } from '../canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <BounceHouseCanvas />

      <p className='absolute xs:bottom-6 bottom-6 w-full flex justify-center items-center text-cyan-900/40'>PRESS TO CONTINUE</p>
      <div className='absolute xs:bottom-14 bottom-14 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[45px] h-[78px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
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
    </section>
  );
};

export default Hero;
