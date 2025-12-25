
const Banner = ({ imgUrl, alt = "image banner" }) => {
    return (
        <a href="#" className="banner mt-10 block w-full">
            <img src={imgUrl} alt={alt} className="banner-img" />
        </a>
    )
}

export default Banner;