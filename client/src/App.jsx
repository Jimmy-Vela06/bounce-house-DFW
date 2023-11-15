import { BrowserRouter } from 'react-router-dom';

import { AboutUs, Contact, Hero, Navbar, BHouseList } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative  bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <AboutUs />
        <BHouseList />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
