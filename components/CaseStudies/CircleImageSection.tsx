import React from 'react';
import CircleArrow from '../../components/CaseStudies/icons/circle-arrow';

export function CircleImageSection() {
  return (
    <div className="w-[700px] relative">
      {CircleArrow}
      <div className="absolute">
        <span className="absolute bottom-[170px] left-[230px] font-bold text-2xl text-center">
          1-4 WEEKS
        </span>
        <span className="absolute text-white font-bold text-2xl -left-[130px] bottom-[280px]">
          DEVELOPMENT
        </span>
        <span className="absolute text-white font-bold text-2xl left-[480px] bottom-[160px]">
          DESIGN
        </span>
        <span className="absolute text-white font-bold text-2xl left-[30px] -bottom-[70px]">
          ANALYSIS
        </span>
        <span className="absolute text-white font-bold text-2xl left-[400px] -bottom-[70px]">
          DELIVERY
        </span>
      </div>
    </div>
  );
}
