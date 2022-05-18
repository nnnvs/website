import React from 'react';
import Post from '../../components/Post/Post';
export const config = {
   title: 'Bookshelf',
   description:
      'Books read. Updated monthly.',
   date: '1/28/2022',
   external: false,
   url: 'http://nikhilvs.com/bookshelf/',
   categories: ['Code', 'Computer Vision','Image Processing'],
   link_text: 'blog',
   slug: 'computer-vision-fundamentals',
   featured: true
};

const Bookshelf = () => {
   return (
      <Post config={config}>

         <p>Books read. Updated monthly. <br></br>
            ** means recommended.
         </p>
         <h3>2022</h3>
         <h4>January</h4>
         <ul>
            <li>
               Looking for Alaska by John Greene
            </li>
            <li>
               The Immortals of Meluha by Amish Tripathi
            </li>
            <li>
               The Looming Tower by Lawrence Wright **
            </li>
         </ul>
         

      </Post>
   );
};

export default Bookshelf;
