const Button = ({ text }) => {
  return (
    <button
      className="w-[48%] md:w-[20%] px-2 py-2 text-[13px] rounded text-white capitalize cursor-pointer bg-[#666] hover:bg-amber-500"
      type="submit"
    >
      {text}
    </button>
  );
};

export default Button;
