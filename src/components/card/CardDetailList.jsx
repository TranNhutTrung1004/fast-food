const CardDetailList = ({ children }) => {
  return (
    <ul className="bg-[#222] py-2 px-4 overflow-y-scroll h-[78%] text-[13px] mt-3">{children}</ul>
  );
};

export default CardDetailList;
