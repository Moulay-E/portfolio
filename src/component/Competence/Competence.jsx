import Image from 'next/image';
import { competenceData } from '@/data/competenceData';

export default function Competence() {
  return (
    <div className="bg-slate-200 rounded-lg">
      <h1>Competences</h1>
      <div className="flex justify-around flex-wrap">
        {competenceData.map((element, i) => {
          return (
            <Image
              key={i}
              className=" rounded-t-lg"
              src={element.img}
              alt="product image"
              //  layout="responsive"
              width={200}
              height={200}
            />
          );
        })}
      </div>
    </div>
  );
}
