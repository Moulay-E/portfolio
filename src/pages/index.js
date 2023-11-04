import Link from 'next/link';
//component
import Navbar from '@/component/Navbar/Navbar';
import Footer from '@/component/Footer/Footer';
import Paragraph from '@/component/Paragraph/Paragraph';
import LinkToProject from '@/component/LinkToProject/LinkToProject';
import { projectData } from '../data/projectData';
//style
import './../styles/style.css';
import './../app/globals.css';
import styles from './../styles/page.module.css';

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen m-0">
      <Navbar />
      <div className="h-16"></div>

      <main className={styles.main}>
        <div className={styles.contenaire}>
          <p>test</p>
          <Link href="/project">projet</Link>
        </div>

        <Paragraph />
        {/* <Gallery /> */}
        <LinkToProject arr={projectData[1]} />
      </main>
      <Footer />
    </div>
  );
}
