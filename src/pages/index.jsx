import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/images/image2.png',
  },
  {
    original: '/images/image3.png',
  },
  {
    original: '/images/image4.png',
  },
  {
    original: '/images/image5.png',
  },
  {
    original: '/images/image6.png',
  },
  {
    original: '/images/image7.png',
  },
  {
    original: '/images/image8.png',
  },
  {
    original: '/images/image9.png',
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arte di Anna</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.imageSection}>
          <ImageGallery 
            items={images} 
            showThumbnails={false} 
            autoPlay={true} 
            slideInterval={3000} 
            showFullscreenButton={false} 
            showPlayButton={false}
            showNav={false}
            renderItem={(item) => (
              <div className={styles.imageWrapper}>
                <img src={item.original} alt="Scenic Art Gallery" className={styles.mainImage} />
              </div>
            )}
          />
        </section>
      </main>
    </div>
  );
}
