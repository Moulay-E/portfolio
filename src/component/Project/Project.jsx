'use client';
import { useState } from 'react';
import FeatureProject from '../Feature/FeatureProject/FeatureProject';
import { projectData } from '../../data/projectData';

// use client
export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="projet">
      <div className="h-12 flex justify-center items-center">
        <h2>Projet</h2>
      </div>
      <div className="max-w-full flex justify-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 gap-4 grid-auto-rows-min">
          {projectData.map((element, i) => {
            if (i < 2 || isVisible) {
              return <FeatureProject key={i} arr={element} />;
            }
            return null;
          })}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mt-4 px-4 py-2 bg-slate-200 text-black rounded"
      >
        {isVisible ? 'Réduire  les projets' : 'Afficher tous les projets'}
      </button>
    </div>
  );
}
