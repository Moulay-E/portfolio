'use client';
import Image from 'next/image';
import Link from 'next/link';
// code non utiliser

export default function LinkToProject({ arr }) {
  return (
    <div className="w-2/5 flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/project">
        <Image
          className="myImage rounded-t-lg"
          src={arr.cover}
          alt="product image"
          //  layout="responsive"
          width={100}
          height={100}
        />
        <div className="flex flex-col justify-around flex-grow px-5 pb-5 ">
          <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
            {' '}
            {arr.title}{' '}
          </h5>

          <div className="flex items-center justify-between self-center">
            <span className=" font-bold text-gray-900 dark:text-white">
              {arr.description}
            </span>
          </div>

          <div className="flex items-center mt-2.5 mb-5 self-center justify-around">
            <p>
              {arr.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
