const InforButton = ({ text, iconClass }) => {
  return (
    <button className="text-[14px] lg:text-[16px] btn-infor hover:text-btn-infor-hover text-white cursor-pointer">
      <i className={iconClass}></i>
      <span className="ml-1.5 capitalize">{text}</span>
    </button>
  );
};

export default InforButton;
