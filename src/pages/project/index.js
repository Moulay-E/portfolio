//style
import './../../app/globals.css';
import './../../styles/style.css';
//component
import Gallery from '@/component/Project/Project';
import Navbar from '@/component/Navbar/Navbar';
import Footer from '@/component/Footer/Footer';

export default function project() {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen m-0">
      <Navbar />
      <div className="h-16"></div>

      <main className="bg-white mt-16">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
