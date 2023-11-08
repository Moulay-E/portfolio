import Image from 'next/image';
import { competenceData } from '@/data/competenceData';

export default function Competence() {
  return (
    <div>
      <h1>Competences</h1>
      {/* {projectData.map((element, i) => {
        if (i < 2 || isVisible) {
          return <FeatureProject key={i} arr={element} />;
        }
        return null;
      })} */}
      <div className="flex justify-around flex-wrap">
        {competenceData.map((element, i) => {
          return (
            <Image
              key={i}
              className=" rounded-t-lg"
              src={element.img}
              alt="product image"
              //  layout="responsive"
              width={100}
              height={100}
            />
          );
        })}
      </div>
    </div>
  );
}
