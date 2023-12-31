import styles from './index.module.scss';
import React from 'react';
import Socials from '../../components/Socials/Socials';
import HeaderBanner from '../../components/HeaderBanner/HeaderBanner';
import Container from '../../components/Container/Container';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const About = () => {
   return (
      <>
         <NextSeo
            title="About - Nikhil"
            description="About Nikhil Vinay Sharma"
            canonical="https:/nikhilvs.com/about"
         />
         <HeaderBanner type="about" />
         <Container className={styles.about}>
            <div className="grid-1-2">
               <div className={styles['small']}>
                  <img src={require('../../components/HeaderBanner/Nikhil__Notion_square.jpg')} />
               </div>

               <div className={styles['item2']}>
                  <div className={styles.lead}>
                     👋 I'm Nikhil.
                  </div>
                  <div className={styles.info}>
                     <div>
                     I'm currently working on LLMs as a Principal Data Scientist at Capital One. 
                     Previously, I did my Master's in Computer Science at {''}
                     <a href="https://cims.nyu.edu/">
                        NYU
                     </a>{''}.
                     </div>
                     <div>
                        Before that I've worked at {''}
                        <a href="https://www.joveo.com/">
                           Joveo
                        </a>{''} and {''}
                        <a href="https://www.here.com/">
                           HERE Technologies
                        </a>{''}, where I have independently
                        initiated and driven several research & development projects in Data Sciences & Backend Engineering.
                     </div>
                     <div>
                        As a Deep Learning enthusiast, I try to work out an keep a hang of what’s going on
                        in the flourishing world of AI. I <Link href={`notes`}>
                           <a>write</a>
                        </Link>  about my experiences with tech in this space.

                     </div>
                     <div>
                        Prior to this, I completed my Bachelors in Electronics & Electrical Engineering at <a href="https://www.bits-pilani.ac.in/">
                           BITS Pilani
                        </a>{''}.
                     </div>
                     <div>
                        I enjoy <Link href={`bookshelf`}>
                           <a>reading</a>
                        </Link>,  <Link href={`gallery`}>
                           <a>photography</a>
                        </Link>, running and video gaming.
                     </div>
                     <div>
                        If you are looking to get in touch, you can either write me an email at nikhilvs[at]nyu.edu or message me on <a href="https://twitter.com/nnnnvs">twitter</a>{''}.
                     </div>
                     <div>
                        Thanks for dropping by!
                     </div>
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>Interests</div>
                     <div>
                        {/* <div className={styles.item}>Natural Language Processing</div> */}
                        <div className={styles.item}>
                           Large Language Models
                        </div>
                        <div className={styles.item}>
                           MLOps
                        </div>
                     </div>
                  </div>

                  <div className={styles['about-col']}>
                     <div className={styles.title}>
                           {' '}
                           <a href="https://patents.google.com/?inventor=Nikhil+Vinay+Sharma">
                              Patents
                           </a>{' '}
                     </div>
                     <div>
                        <div className={styles.item}>
                           {' '}
                           <a href="https://patents.google.com/patent/US20200355515A1/en?oq=US20200355515A1/">
                              On-Street Parking Localization using Unsupervised Machine Learning on GPS Probe data, May 2019, US20200355515A1
                           </a>{' '}
                        </div>
                        <div className={styles.item}>
                           {' '}
                           <a href="https://patents.google.com/patent/US20210270629A1/">
                              Inquisitive approach to find the last mile path using Audio and GPS Probe data using Machine Learning, Feb 2020, US20210270629A1
                           </a>{' '}
                        </div>
                     </div>
                  </div>
                  <div className={styles.info}>
                     <div>
                        All views contained herein are my own and do not represent the views of my employers or any affiliate. Last updated - Dec 2023.
                     </div>
                  </div>
               </div>
               <div className={styles['item1']}>
                  <Socials margin={false} />
               </div>
            </div>
         </Container>
      </>
   );
};

export default About;
