import React from 'react';
import styles from './index.module.scss';
import { render } from 'react-dom';
import Images from '../../components/Gallery/Gallery';
import GalleryImages from 'react-grid-gallery';
import { NextSeo } from 'next-seo';
import Gallery from "react-photo-gallery";
import Container from '../../components/Container/Container';


const Galleria = () => {
    return (
        <>
            <NextSeo
                title="Gallery"
                description=""
                canonical="https:/nikhilvs.com/gallery"
            />
            <GalleryImages images={Images} enableImageSelection={false}/>
        </>
    );
};

// const Galleria = () => {
//     return (
//         <>
//             <NextSeo
//                 title="Gallery"
//                 description=""
//                 canonical="https:/nikhilvs.com/gallery"
//             />
//             <Container className={styles.design}>
//                 {/* <GalleryImages 
//                 images={Images} 
//                 enableImageSelection={false}
//                 backdropClosesModal
//                 /> */}
//                 <Gallery 
//                 photos={Images}
//                 />
//             </Container>
//         </>
//     );
// };

export default Galleria;
