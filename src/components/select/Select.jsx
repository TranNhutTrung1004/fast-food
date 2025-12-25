import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectItem from "./SelectItem"
import SelectList from "./SelectList"
import Button from "../button/Button"

import defineType from "../../store/defineType.json";

const Select = () => {
    const [sortBy, setSortBy] = useState("");
    const [category, setCategory] = useState("");
    const [country, setCountry] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Tạo query params
        const params = new URLSearchParams();
        if (sortBy) params.append("sort", sortBy);
        if (category) params.append("category", category);
        if (country) params.append("country", country);
        if (year) params.append("year", year);

        // Navigate đến trang lọc phim
        navigate(`/loc-phim?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between md:items-center">
            <div className="w-full grid grid-cols-2 gap-y-2 gap-x-4 md:w-[78%] md:flex md:gap-0 md:justify-between md:items-center">
                <SelectList value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sắp xếp</option>
                    {defineType.defineType.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            text={item.text}
                        />
                    ))}
                </SelectList>
                
                <SelectList value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Thể loại</option>
                    {defineType.typeFilm.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            text={item.text}
                        />
                    ))}
                </SelectList>
                
                <SelectList value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="">Quốc gia</option>
                    {defineType.nations.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            text={item.text}
                        />
                    ))}
                </SelectList>
                
                <SelectList value={year} onChange={(e) => setYear(e.target.value)}>
                    <option value="">Năm</option>
                    {defineType.years.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            text={item.text}
                        />
                    ))}
                </SelectList>
            </div>
            <Button text="Lọc phim" type="submit" />
        </form>
    )
}

export default Select;