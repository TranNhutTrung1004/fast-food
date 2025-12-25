
const CommentItem = ({ user, text, releaseDate }) => {
    return (
        <div className="w-full py-3 px-4 border rounded-[3%] border-amber-50 flex justify-between items-center gap-2 text-white">
            <p className="w-max py-3 px-6 border-none rounded-full bg-amber-400 text-black text-[18px] uppercase">{user[0]}</p>
            <div className="w-[88%] flex flex-col justify-between gap-2">
                <div className="flex gap-3 items-center">
                    <span className="text-[16px] font-bold capitalize">{user}</span>
                    <span className="text-[12px] opacity-70">{releaseDate}</span>
                </div>
                <p className="text-[14px]">{text}</p>
            </div>
        </div>
    )
}

export default CommentItem;