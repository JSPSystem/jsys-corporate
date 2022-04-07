import { WorksCardProps } from "../types/WorksCardProps";

const WorksVerticalCard = (props: WorksCardProps) => {
  return (
    <div className="works_card_v mx-auto my-5 w-80 h-72 bg-white shadow-xl">
      <a
        href={props.link && props.link != "" ? props.link : "#"}
        target={props.link && props.link != "_blank" ? props.link : ""}
        rel="noopener noreferrer"
      >
        <div className="w-full h-full">
          <img src={props.image_src} alt={props.image_alt} className="w-full h-3/5" />
          <div className="px-3 text-neutral-800">
            <p className="mt-2 font-jura text-xs font-bold text-teal-700">{props.category}</p>
            <h2 className="font-sansjp text-sm font-bold">{props.name}</h2>
            <p className="mt-3 font-jura text-xs font-bold">{props.skillset}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default WorksVerticalCard;
