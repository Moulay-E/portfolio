import Image from 'next/image';
import logo from '@/asset/img/portfolioImgLogo.png';
import Link from 'next/link';
import linkedinIcon from '@/asset/img/linkedinIcon.png';
import mailIcon from '@/asset/img/mailIcon.png';
import githubIcon from '@/asset/img/githubIcon.png';

export default function Footer() {
  return (
    <footer
      className="bg-slate-200  shadow dark:bg-gray-900  mt-6"
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
            {/* <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a> */}
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
            {/* <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a> */}
          </div>
        </div>

        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span> */}
      </div>
    </footer>
  );
}
