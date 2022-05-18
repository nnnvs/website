
import { config as computerVisionFundamentals } from '../pages/notes/computer-vision-fundamentals';
import { config as helpfulLinksForMsStem } from '../pages/notes/helpful-links-for-ms-stem-applicants';
import vanGogh from './van-gogh-smol.jpeg';
import multithreading from './image-blog-multithreading.webp';

const writing = [
//   add new one on top of the list
{
   title: 'Performance Prediction of Multi-threaded Applications',
   description:
      'We analyse an efficient learning based approach to estimate application performance with varying degrees of parallelism for a specific hardware.',
   date: '05/17/2022',
   external: true,
   url: 'https://nikhilvinaysharma.medium.com/performance-prediction-of-multi-threaded-applications-c2c98c7f43f8',
   categories: ['Performance Prediction'],
   link_text: 'medium',
   featured: true,
   slug: 'performance-prediction',
   img: multithreading
},
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
   slug: 'style-transfer',
   img: vanGogh
},
   computerVisionFundamentals,
   helpfulLinksForMsStem,
];

export default writing;
