import Image from 'next/image';
import { competenceData } from '@/data/competenceData';

export default function Competence() {
  return (
    <div className="bg-slate-200 rounded-lg">
      <h2 className="font-semibold">Mes Competences</h2>
      <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-5">
        {competenceData.map((element, i) => {
          return (
            <div className="h-full flex justify-center items-center " key={i}>
              <Image
                key={i}
                className="w-2/4 rounded-lg"
                src={element.img}
                alt="product image"
                //  layout="responsive"
                width={200}
                height={200}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}