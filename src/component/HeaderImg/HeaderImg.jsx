import Image from 'next/image';
import headerImg from '@/asset/img/headerImgCover.jpg';

export default function HeaderImg() {
  return (
    <div className="h-80 w-full mt-16 ">
      <Image
        className="w-full h-full  object-cover rounded-lg "
        src={headerImg}
        alt="product image"
        width={500}
        height={200}
      />
    </div>
  );
}
