import Link from 'next/link';
//component
import Navbar from '@/component/Navbar/Navbar';
import Footer from '@/component/Footer/Footer';
import Presentation from '@/component/Presentation/Presentation';
import LinkToProject from '@/component/LinkToProject/LinkToProject';
import { projectData } from '../data/projectData';
//style
import './../styles/style.css';
import './../app/globals.css';
import styles from './../styles/page.module.css';
import PortfolioBtn from '@/component/PortfolioBtn/PortfolioBtn';
import HeaderImg from '@/component/HeaderImg/HeaderImg';
import Competence from '@/component/Competence/Competence';

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen m-0">
      <Navbar />
      <div className="h-16"></div>

      <main className="h-4/5 flex flex-col items-center bg-white ">
        <div className="w-4/5  flex flex-col justify-around h-full gap-y-16">
          <HeaderImg />

          {/* <div id="presentation"></div> */}
          <Presentation />
          {/* <div id="competence"></div> */}
          <Competence />

          <PortfolioBtn />
        </div>
      </main>
      <Footer />
    </div>
  );
}
