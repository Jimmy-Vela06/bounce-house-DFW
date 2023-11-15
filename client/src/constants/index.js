import { bbPicOne, bbPicTwo, bbPicThree } from './bhouse1/houseOne';
import { bTwoPicOne, bTwoPicTwo } from './bhouse2/houseTwo';
import { bThreePicOne, bThreePicTwo, bThreePicThree } from './bhouse3/housethree';
import { bOtherPicOne, bOtherPicTwo, bOtherPicThree, bOtherPicFour, bOtherPicFive } from './bhouse4/otherHouses';

import tableAndChairs from './other/tableAndChairs.png';

export const navLinks = [
  {
    id: 'about',
    title: 'About-Us',
  },
  {
    id: 'bounce-houses',
    title: 'Bounce Houses',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const Products = [
  {
    name: 'Octopus',
    size: '14 x 13',
    image: [bbPicOne, bbPicTwo, bbPicThree],
  },
  {
    name: 'Princess Castle',
    size: '15 x 15.',
    image: [bTwoPicOne, bTwoPicTwo],
  },
  {
    name: 'Sports House',
    size: '20 x 20.',
    image: [bThreePicOne, bThreePicTwo, bThreePicThree],
  },
  {
    name: 'Other Options',
    image: [bOtherPicFive, bOtherPicThree, bOtherPicFour, bOtherPicOne, bOtherPicTwo],
  },
];

const TablesChairs = {
  name: 'Tables And Chairs',
  description: 'Call to ask for details',
  image: [tableAndChairs],
};

export { Products, TablesChairs };
