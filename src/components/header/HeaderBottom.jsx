import NavLinks from "./NavLinks";
import style from "./header.module.css";

const HeaderBottom = () => {
    return (
        <nav className={`${style.headerBottom} hidden md:block w-full h-[60px] bg-dark-sliver relative`}>
            <NavLinks></NavLinks>
        </nav>
    )
}

export default HeaderBottom;