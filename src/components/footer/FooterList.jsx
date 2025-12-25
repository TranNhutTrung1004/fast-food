
const FooterList = ({ title, children }) => {
    return (
        <div className="w-full">
            <p className="md:text-[12px] text-white text-center font-bold text-[14px] capitalize mb-4 ">{title}</p>
            <ul className="flex flex-col gap-3 justify-between">
                {children}
            </ul>
        </div>
    )
}

export default FooterList