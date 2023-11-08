import portfolioBtnImg from './../../asset/img/portfolioTest.jpg';
import Image from 'next/image';

export default function PortfolioBtn() {
  const data = {
    title: 'voici le titre',
    description: 'voici la description',
  };
  return (
    <div className=" max-w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="">
        <Image
          className="myImage rounded-t-lg"
          src={portfolioBtnImg}
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
            {data.title}{' '}
          </h5>
        </a>

        <div className="flex items-center justify-between self-center">
          <span className=" font-bold text-gray-900 dark:text-white">
            {data.description}
          </span>
        </div>
      </div>
    </div>
  );
}
