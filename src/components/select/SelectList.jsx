
const SelectList = ({ children, value, onChange }) => {
    return (
        <select 
            value={value}
            onChange={onChange}
            className="w-[100%] md:w-[23%] px-1 py-2 text-[13px] text-center bg-[#383838]"
        >
            {children}
        </select>
    )
}

export default SelectList;