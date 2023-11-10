import Image from 'next/image';
import imagePresentation from '@/asset/img/rougeCover.jpg';

export default function Presentation() {
  return (
    <div className="max-w-full flex flex-col md:flex-row justify-center bg-slate-200 rounded-lg ">
      <div className="md:w-2/4 flex flex-col justfy-center items-center">
        <div className="w-3/4">
          <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="">A propos</span>
          </h2>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Formée intensivement pendant 9 mois chez OpenCLassrooms, j'ai pu me
            familiariser, entre autres, avec React, Sass, Node.js et Redux pour
            créer des applications web performantes. Je reste toujours motivée à
            participer à de nouveaux projets, à apprendre de nouvelles
            technologies et à travailler avec des esprits créatifs. N'hésitez
            pas à parcourir mon portfolio pour découvrir mon univers. Si vous
            souhaitez collaborer ou simplement discuter de projets, je serais
            ravie d'échanger avec vous !
          </p>
        </div>
      </div>
      <div className="md:w-2/4">
        <Image
          className=" w-full h-full rounded-r-lg object-cover"
          src={imagePresentation}
          alt="product image"
          // layout="responsive"
          // objectFit="cover"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
