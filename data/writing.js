
import { config as computerVisionFundamentals } from '../pages/notes/computer-vision-fundamentals';
import { config as helpfulLinksForMsStem } from '../pages/notes/helpful-links-for-ms-stem-applicants';
import vanGogh from './van-gogh-smol.jpeg';

const writing = [
//   add new one on top of the list
{
   title: 'Analyzing Neural Style Transfer using Deep Learning',
   description:
      'This post analyses the theory behind the techniques used for artistic neural style transfer using convolutional neural networks.',
   date: '01/04/2021',
   external: true,
   url: 'http://nikhilvinaysharma.medium.com/ultimate-guide-to-style-transfer-using-deep-learning-988c4df90af7',
   categories: ['Deep Learning', 'Computer Vision','Papers'],
   link_text: 'medium',
   featured: true,
   img: vanGogh
},
   computerVisionFundamentals,
   helpfulLinksForMsStem,
];

export default writing;
