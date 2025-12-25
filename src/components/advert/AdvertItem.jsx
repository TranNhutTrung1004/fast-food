const AdvertItem = ({ imageUrl, altText, linkUrl }) => {
    return (
        <li className="advert-list-item w-[32%]">
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={altText} srcset="" loading="lazy" className="h-[39px] w-full"/>
            </a>
        </li>
    )
}

export default AdvertItem;