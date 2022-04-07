import { ServiceCardProps } from "../types/ServiceCardProps";

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <div className="service_card bg-white shadow-xl py-5 md:py-8 px-5 h-72 md:h-88">
      <img src={props.image_src} alt={props.image_alt} className="mx-auto rounded-2xl w-28 md:w-32" />
      <h2 className="mt-3 md:mt-4 font-jura font-bold text-center text-xl md:text-2xl text-teal-700">{props.title}</h2>
      <p className="mt-3 md:mt-4 font-sansjp text-sm md:text-base">{props.description}</p>
    </div>
  );
};

export default ServiceCard;
