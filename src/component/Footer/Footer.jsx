import Image from 'next/image';
import logo from '@/asset/img/portfolioImgLogo.png';
import Link from 'next/link';
import linkedinIcon from '@/asset/img/linkedinIcon.png';
import mailIcon from '@/asset/img/mailIcon.png';
import githubIcon from '@/asset/img/githubIcon.png';

export default function Footer() {
  return (
    <footer
      className="bg-slate-200  shadow dark:bg-gray-900  mt-16"
      id="contact"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image
            src={logo}
            className="h-8 mr-3"
            alt="Flowbite Logo"
            width={100}
            height={100}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>

          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              href="https://www.linkedin.com/in/moulay-edda-a94604293/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt="linkedin logo and link"
                width={24}
                height={24}
              />
              <span className="sr-only">linkedin</span>
            </Link>
            <Link
              href="mailto:ayoub.edda2@gmail.com"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              <Image
                src={mailIcon}
                alt="Mail logo and link"
                width={24}
                height={24}
              />
              <span className="sr-only">mail</span>
            </Link>
            <Link
              href="https://github.com/Moulay-E"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={githubIcon}
                alt="Github logo and link"
                width={24}
                height={24}
              />
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
