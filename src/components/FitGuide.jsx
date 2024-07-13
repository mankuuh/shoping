import React from 'react';
import KidsImage from './../assets/fitSection/Kids.jpg';
import MenImage from './../assets/fitSection/Men.jpg';
import WomenImage from './../assets/fitSection/Women.jpg';
import { Link } from 'react-router-dom';
function FitGuide() {
  const images = {
    Men: MenImage,
    Women: WomenImage,
    Kids: KidsImage,
  };

  const links = {
    Men: '/men',
    Women: '/women',
    Kids: '/kids',
  };

  return (
    <div className="container mx-auto  py-12">
      <h1 className="text-center leading-wide text-2xl mb-12 font-medium">
        FIT GUIDE
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {['Men', 'Women', 'Kids'].map((label) => (
          <Link key={label} className="h-[600px] group" to={links[label]}>
            <img
              classsName="h-full transform transition-all delay-300 group-hover:scale-110 w-full object-cover"
              src={images[label]}
            />
            <div className="bg-black  bg-opacity-50 inline-block transform transition-all delay-300  group-hover:scale-110 px-6 py-2 text-white">
              {label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FitGuide;