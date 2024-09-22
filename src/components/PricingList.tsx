import { pricing } from "../constants";
import Button from "./ui/Button";
import check from "../assets/check.svg";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((price) => (
        <div
          key={price.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{price.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {price.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {price.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {price.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={price.price ? "/pricing" : "mailto:contactus@gmail.com"}
            white={!!price.price}
          >
            {price.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {price.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} alt="Check" width={24} height={24} />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
