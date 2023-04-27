import React from 'react';
import Lottie from 'lottie-react';
import teammemberanimation from '../../public/lottie/teammemberanimation.json';
import TeamCarousel from '../Carousel/TeamCarousel';

interface YourTeamProps {
  teamMembers: string[];
}

export default function YourTeam({ teamMembers }: YourTeamProps) {
  return (
    <div className="bg-primary h-[600px] w-full">
      <div className="flex w-full justify-center">
        <h1 className="uppercase text-white text-2xl xl:text-5xl font-bold text-center mt-24">
          Your Team
        </h1>
      </div>
      <div className="hidden xl:flex w-full justify-center mt-24">
        {teamMembers?.map((member, i) => {
          return (
            <div
              className={
                i === 0 ? 'flex flex-col max-w-[200px]' : 'flex flex-col max-w-[200px] ml-6'
              }
              key={i}
            >
              <div className="flex justify-center text-center items-center">
                <Lottie
                  animationData={teammemberanimation}
                  style={{
                    height: '140px',
                  }}
                  loop={true}
                />
              </div>
              <div className="text-2xl text-white font-medium text-center">{member}</div>
            </div>
          );
        })}
      </div>
      <div className="xl:hidden flex items-center justify-center">
        <TeamCarousel item={teamMembers} />
      </div>
    </div>
  );
}
