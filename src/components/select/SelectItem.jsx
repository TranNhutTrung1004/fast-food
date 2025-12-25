
const SelectItem = ({ value, text, isDefault }) => {
    return (
        <option value={value} selected={isDefault}>{text}</option>
    )
}

export default SelectItem;