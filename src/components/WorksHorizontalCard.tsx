import { WorksCardProps } from "../types/WorksCardProps";

const WorksHorizontalCard = (props: WorksCardProps) => {
  const image = <img src={props.image_src} alt={props.image_alt} className="w-6/11 h-full" />;
  const info = (
    <div className="grow px-3 text-neutral-800">
      <p className="mt-8 font-jura text-sm font-bold text-teal-700">{props.category}</p>
      <h2 className="font-sansjp font-bold">{props.name}</h2>
      <p className="mt-6 font-jura text-sm font-bold">{props.skillset}</p>
    </div>
  );
  const add_class = props.image_left ? "works_card_l" : "works_card_r";

  return (
    <div className={`${add_class} mx-auto my-5 w-148 md:w-172 h-44 md:h-56 bg-white shadow-xl`}>
      <a
        href={props.link && props.link != "" ? props.link : "#"}
        target={props.link && props.link != "_blank" ? props.link : ""}
        rel="noopener noreferrer"
      >
        <div className="flex w-full h-full">
          {props.image_left ? image : info}
          {props.image_left ? info : image}
        </div>
      </a>
    </div>
  );
};

export default WorksHorizontalCard;
