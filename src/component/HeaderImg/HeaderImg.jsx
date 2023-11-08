import Image from 'next/image';
import headerImg from '@/asset/img/headerTest.jpg';

export default function HeaderImg() {
  return (
    <Image
      className="myImage rounded-t-lg w-full"
      src={headerImg}
      alt="product image"
      //  layout="responsive"
      width={100}
      height={100}
    />
  );
}
