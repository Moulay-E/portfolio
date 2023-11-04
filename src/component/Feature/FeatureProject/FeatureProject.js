import Image from 'next/image';

export default function FeatureProject({ arr }) {
  if (!arr) {
    console.error('arr is not provided');
    return null;
  }

  if (!arr.cover || !arr.title || !arr.description || !arr.tags) {
    console.error('One or more required fields are missing in arr', arr);
    return null;
  }

  return (
    <div className=" max-w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="">
        <Image
          className="myImage rounded-t-lg"
          src={arr.cover}
          alt="product image"
          //  layout="responsive"
          width={100}
          height={100}
        />
      </a>
      <div className="flex flex-col justify-around flex-grow px-5 pb-5 ">
        <a href="#">
          <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
            {' '}
            {arr.title}{' '}
          </h5>
        </a>

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
    </div>
  );
}

{
  /* <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <Image className="p-8 rounded-t-lg" src= {arr.cover} alt="product image" 
            width={500} // ou la taille que vous voulez
          height={300}
        />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {arr.title} </h5>
        </a>
       
        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">{arr.description}</span>
        </div>

        <div className="flex items-center mt-2.5 mb-5">
        <p>
                {arr.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                ))}
            </p>
        </div>
    </div>
</div> */
}
