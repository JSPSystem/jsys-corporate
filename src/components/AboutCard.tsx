import { AboutCardProps } from "../types/AboutCardProps";

const AboutCard = (props: AboutCardProps) => {
  const rows = props.rows.map((row, index) => {
    const valuesString = row.values.map((value, index) => {
      return <p key={index}>{value}</p>;
    });
    return (
      <div
        key={index}
        className="flex justify-center items-center py-1 md:py-2 mb-1 md:mb-3 border-b border-neutral-400"
      >
        <div className="grow-0 pl-3 w-1/3 md:w-44">{row.title}</div>
        <div className="grow">{valuesString}</div>
      </div>
    );
  });

  return (
    <div className="mx-auto flex justify-center items-center w-4/5 md:w-148 h-11/12 md:h-96 bg-white shadow-xl">
      <div className="w-11/12 font-sansjp text-neutral-800 text-xs md:text-sm">{rows}</div>
    </div>
  );
};

export default AboutCard;
