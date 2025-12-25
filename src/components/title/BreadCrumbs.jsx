
const BreadCrumbs = ({ title, text = "the loai" }) => {
    return (
        <h3 className="w-full text-[13px] text-sm text-white uppercase py-5 px-4 bg-[#181818]">
            <span className="mr-3">{text}</span> / <span className="opacity-70 ml-3">{title}</span> 
        </h3>
    )
}

export default BreadCrumbs;