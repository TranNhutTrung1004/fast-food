import { Link } from "react-router-dom";

const TrendingCard = ({ title, totalViews, ranking, slug }) => {
    return (
        <Link to={`/phim/${slug}`} className={`flex justify-between items-center hover:bg-gray-800/50 rounded-lg transition`}>
            <div className={`md:w-[20%] text-center text-[13px] flex justify-center items-center`}>
                <p className='font-bold aspect-square flex items-center justify-center rounded-full bg-trending min-w-[2rem] min-h-[2rem] p-2'>{ranking}</p>
            </div>
            <div className={`text-start text-[12px] md:w-[80%] p-2`}>
                <h4 className={`font-bold text-white mb-1 cursor-pointer hover:text-amber-700`}>{title}</h4>
                <p className={`italic opacity-65`}>{totalViews} lượt xem</p>
            </div>
        </Link>
    )
}

export default TrendingCard;