import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../../styles';

import { StartWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  //service_v9tnhrm
  // template_17y17ot

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_v9tnhrm',
        'template_17y17ot',
        {
          from_name: form.name,
          to_name: 'Jimmy Vela',
          from_email: form.email,
          to_email: 'jimmyvela06@gmail.xom',
          message: form.message,
        },
        'DkgEwFu3ZOlq2o45n'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className={`xl:mt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[.6] bg-violet-600/75 p-8 rounded-2xl'>
        <h2 className={styles.sectionHeadText}>Contact Us</h2>
        <h4 className='text-white-600 font-black md:text-[25px] xs:text-[20px] text-[20px]'>Phone:</h4>
        <button
          type='submit'
          className='bg-fuchsia-400/25 m1-2 py-1 px-2 mt-1 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-purple-400 hover:bg-fuchsia-700 '
        >
          <a href='tel:9728347895'> 972-834-7895 </a>
        </button>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-4 flex flex-col gap-3'>
          <h4 className='text-white-600 font-black md:text-[25px] xs:text-[20px] text-[20px]'>Send Us a Message:</h4>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Customer name?'
              className='bg-violet-200/25 py-4 px-6 placeholder:text-white-100/50 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-violet-200/25 py-4 px-6 placeholder:text-white-100/50 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='How can we help you?'
              className='bg-violet-200/25 py-4 px-6 placeholder:text-white-100/50 text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className='flex justify-between ...'>
            <button
              type='submit'
              className='mt-3 bg-fuchsia-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-purple-400'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            <div></div>
            <div className='flex mt-2 items-center justify-center gap-x-5 '>
              <p className='hidden md:block'>Follow Us On Our Socials</p>
              <a
                href='https://www.facebook.com/people/Bounce-House-DFW/100063855107558/?mibextid=LQQJ4d'
                aria-label='Find us on Facebook'
                target='_blank'
                rel='noopener'
              >
                <svg className='h-10 w-10 text-white' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </a>
              <a
                href='https://www.instagram.com/bouncehousedfw/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'
                aria-label='Find us on Instagram'
                target='_blank'
                rel='noopener'
              >
                <svg className='h-10 w-10 text-white' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z'
                    fill='currentColor'
                  ></path>
                  <path
                    d='M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z'
                    fill='currentColor'
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default StartWrapper(Contact, 'contact');
