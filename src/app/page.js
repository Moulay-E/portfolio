
import Image from 'next/image'
import styles from "./../styles/page.module.css";
import FeatureProject from '../component/feature/FeatureProject';
import { projectData } from '../data/projectData';
import Gallery from '@/component/gallery/Gallery';
import './../styles/style.css';
import Navbar from '@/component/Navbar/Navbar';
import Footer from '@/component/Footer/Footer';
import Paragraph from '@/component/Paragraph/Paragraph';

export default function Home() {

  return (
    <div className={styles.englobage }>
    <Navbar />


    <main className={styles.main}>
    
      <div className= {styles.contenaire } >
        <p>test</p>
      </div>
  
      {/* <div
       className=
      //  {styles.project__grid}
       "grid grid-cols-2 md:grid-cols-3 gap-4 grid-auto-rows-min">
        {projectData.map((element, i) => {
            return <FeatureProject key={i} arr={element} /> 
          })}
       </div> */}
       <Paragraph />
       <Gallery />
    </main>
    <Footer />
    </div>
  )
}
