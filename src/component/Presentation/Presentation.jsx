import Image from 'next/image';
import imagePresentation from '@/asset/img/rougeCover.jpg';

export default function Presentation() {
  return (
    <div className="max-w-full flex flex-col md:flex-row justify-center bg-slate-200 rounded-lg ">
      <div className="md:w-2/4">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Better Data
          </span>
          Scalable AI.
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          different environments. For example, the client and the server, or the
          server and the data store. In React, you choose where to place the
          client-server network boundary wherever it makes the most sense.
          Behind the scenes, the work is split into two parts: the client module
          graph and the server module graph. The server module graph contains
          all the components that are rendered on the server, and the client
          module graph contains all components that are rendered on the client.
          It may be helpful to think a
        </p>
      </div>
      <div className="md:w-2/4">
        <Image
          className=" w-full h-full rounded-r-lg"
          src={imagePresentation}
          alt="product image"
          //  layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
