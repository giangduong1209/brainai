import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((company, idx) => (
          <li
            key={idx}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img src={company} width={134} height={28} alt={company} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;