import Image from 'next/image';
import headerImg from '@/asset/img/headerImgCover.jpg';

export default function HeaderImg() {
  return (
    <Image
      className="myImage rounded-lg w-full"
      src={headerImg}
      alt="product image"
      //  layout="responsive"
      width={500}
      height={300}
    />
  );
}
