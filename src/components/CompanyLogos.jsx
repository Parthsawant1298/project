import { useState } from 'react';
import { companyLogos } from "../constants";

const CompanyLogo = ({ logo, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="flex items-center justify-center flex-1 h-[8.5rem] min-w-[16rem]"
      key={index}
    >
      <div
        className="transform transition-transform duration-500 ease-in-out hover:cursor-pointer"
        style={{
          transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={logo} 
          width={134} 
          height={28} 
          alt={logo}
          className="transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </li>
  );
};

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50 ">
        Helping people create projects  at
      </h5>
      <div className="overflow-hidden">
        <ul className="flex animate-infinite-scroll">
          {companyLogos.map((logo, index) => (
            <CompanyLogo 
              key={index} 
              logo={logo} 
              index={index}
            />
          ))}
          {/* Duplicate logos for seamless scrolling */}
          {companyLogos.map((logo, index) => (
            <CompanyLogo 
              key={`duplicate-${index}`} 
              logo={logo} 
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;