import FooterItem from "./FooterItem"
import FooterList from "./FooterList"

import style from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={`${style.footer} w-full mt-6 px-4 md:px-8 lg:px-40 gap-4 md:gap-6 flex flex-col md:flex-row justify-between items-start bg-[#2d2d2d]`}>
            <div className="w-full md:w-[60%] text-[12px] md:text-[13px] py-6 text-justify opacity-70 text-white">
                <p className="mb-4">
                    <span className="text-[13px] md:text-[14px] font-bold opacity-100">Xem phim online</span> miễn phí chất lượng cao với phụ đề Tiếng Việt - Thuyết Minh - Lồng Tiếng. 
                    Website có hơn +10.000 phim và luôn cập nhật nhanh nhất các thể loại phim như: phim chiếu rạp
                    , phim bộ Trung Quốc, phim Hàn Quốc…
                </p>
                <p>
                    Trang web có giao diện trực quan, thuận tiện, tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới,
                     hứa hẹn đem lại trải nghiệm tốt cho người yêu phim.
                </p>
            </div>

            <div className="w-full md:w-[35%] h-full py-6 bg-[#353535] flex flex-col sm:flex-row gap-4 sm:gap-8 items-start justify-center px-4 sm:px-0">
                <FooterList
                    title={"Trợ giúp"}
                >
                    <FooterItem
                        text={"Điều khoản chung"}
                    ></FooterItem>
                    <FooterItem
                        text={"Chính sách riêng tư"}
                    ></FooterItem>
                    <FooterItem
                        text={"Sitemap"}
                    ></FooterItem>
                    <FooterItem
                        text={"RSS Feed"}
                    ></FooterItem>
                </FooterList>

                <FooterList
                    title={"Motchill"}
                >
                    <FooterItem
                        text={"Trang chủ"}
                    ></FooterItem>
                    <FooterItem
                        text={"Giới thiệu"}
                    ></FooterItem>
                    <FooterItem
                        text={"FAQ"}
                    ></FooterItem>
                    <FooterItem
                        text={"Liên hệ"}
                    ></FooterItem>
                </FooterList>
            </div>
        </footer>
    )
}

export default Footer;