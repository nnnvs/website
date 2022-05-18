import React from 'react';
import Post from '../../../components/Post/Post';
export const config = {
   title: 'Helpful Guides for Grad School Applicants in STEM',
   description:
      'The Grad School Admission Application cycle is a long and tiresome process. These are some links I generally send out to applicants that reach out to me.',
   date: '12/23/2021',
   external: false,
   url: 'http://nikhilvs.com/notes/helpful-links-for-ms-stem-applicants/',
   categories: ['Grad School'],
   link_text: 'blog',
   slug: 'helpful-links-for-ms-stem-applicants',
   featured: false,
};

const HelpfulLinks = () => {
   return (
      <Post config={config}>
         <p> The Grad School Admission Application cycle is a long and tiresome process. These are some links I generally send out to applicants that reach out to me. </p>
         <ul>
            <li>
               Useful links:  <a href="https://www.cs.utexas.edu/~vijay/links.htm">https://www.cs.utexas.edu/~vijay/links.htm</a>{''}
            </li>
            <li>
            A few points on SOP: <a href="https://threadreaderapp.com/thread/933388419589459969.html">https://threadreaderapp.com/thread/933388419589459969.html</a>{''}
            </li>
            <li>
            Guide on LORs: <a href="https://cs.brown.edu/~sk/Memos/Grad-School-Recos/">https://cs.brown.edu/~sk/Memos/Grad-School-Recos/</a>{''}
            </li>
            <li>
            General Guide by Matt Might - <a href="http://matt.might.net/articles/how-to-apply-and-get-in-to-graduate-school-in-science-mathematics-engineering-or-computer-science/">
               http://matt.might.net/articles/how-to-apply-and-get-in-to-graduate-school-in-science-mathematics-engineering-or-computer-science/</a>{''}
            </li>
            <li>
            Unfortunately, CGPA is a massive factor for the university adcoms. 
            Please read this <a href="https://www.reddit.com/r/GradSchool/comments/25gj24/a_somewhat_notgentle_guide_to_getting_into_grad/">this reddit post</a>. 
            </li>
            <li>During the entire application cycle, you'll need to send cold emails to a lot of people. Oftentimes, you won't get a reply the first time.
               <a href="https://guzey.com/follow-up/"> It's your responsiblity to follow up.</a> 
            </li>    
         </ul>

         <p> PS - If you're a <a href="https://www.bits-pilani.ac.in/">BITSian</a>{''}, you should also have access to the MLA articles on the Facebook group BITS2MSPHD. 
         These are extremely detailed and will guide you the entire way. You can also access results from past admissions data and reach out to seniors from your target university directly.</p>

         <p>If you want to add anything to this list, you can either write me an email at nikhilvs[at]nyu.edu or message me on <a href="https://twitter.com/nnnnvs">twitter</a>{''}.</p>

      </Post>
   );
};

export default HelpfulLinks;
