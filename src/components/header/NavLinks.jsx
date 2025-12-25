import NavList from "./NavLists";
import NavItem from "./NavItem";

const NavLinks = () => {
  return (
    <NavList>
        <NavItem label="trang chủ" href="/" />
        <NavItem label="phim lẻ" href="/the-loai/phim-le" />
        <NavItem label="phim bộ" href="/the-loai/phim-bo" />

        <NavItem label="thể loại">
            <NavList isSubMenu={false}>
                <NavItem label="hành động" href="/the-loai/hanh-dong" />
                <NavItem label="phiêu lưu" href="/the-loai/phieu-luu" />
                <NavItem label="hài hước" href="/the-loai/hai-huoc" />
                <NavItem label="khoa học viễn tưởng" href="/the-loai/khoa-hoc-vien-tuong" />
                <NavItem label="kinh dị" href="/the-loai/kinh-di" />
                <NavItem label="tình cảm" href="/the-loai/tinh-cam" />
                <NavItem label="anime" href="/the-loai/anime" />
            </NavList>
        </NavItem>

        <NavItem label="quốc gia">
            <NavList isSubMenu={false}>
                <NavItem label="trung quốc" href="/quoc-gia/trung-quoc" />
                <NavItem label="hàn quốc" href="/quoc-gia/han-quoc" />
                <NavItem label="nhật bản" href="/quoc-gia/nhat-ban" />
                <NavItem label="việt nam" href="/quoc-gia/viet-nam" />
                <NavItem label="mỹ" href="/quoc-gia/my" />
            </NavList>
        </NavItem>

        <NavItem label="năm phát hành">
            <NavList isSubMenu={false}>
                <NavItem label="2025" href="/nam/2025" />
                <NavItem label="2024" href="/nam/2024" />
                <NavItem label="2023" href="/nam/2023" />
            </NavList>
        </NavItem>
    </NavList>
  );
};

export default NavLinks;
