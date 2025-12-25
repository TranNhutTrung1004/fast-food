const CardDetailItem = ({ title, value, isOptional }) => {
  const styles = {
    1: "bg-[#777] py-1 px-2 md:px-4 md:py-2 font-bold text-white",
    2: "opacity-70",
    3: "font-bold",
  };
  const style = styles[isOptional] || "";

  return (
    <li className="mt-3 text-[8px] md:text-[14px]">
      {title}: <span className={`text-[8px] md:text-[13px] ${style}`}>{value}</span>
    </li>
  );
};

export default CardDetailItem;
