import AdvertItem from "./AdvertItem";
import AdvertList from "./AdvertList";

const Advert = () => {
  return (
    <div className="advert text-center my-6">
      <AdvertList>
        <AdvertItem
          imageUrl="/src/assets/images/advert/advert_1.gif"
          altText="Advert 1"
          linkUrl="https://ok9vip8.com/qcweb38"
        />
        <AdvertItem
          imageUrl="/src/assets/images/advert/advert_2.gif"
          altText="Advert 2"
          linkUrl="https://moneycat.vn/?utm_source=smm_entertainment&utm_medium=cpm&utm_campaign=smm_entertainment&utm_content=smm_entertainment&utm_term=smm_entertainment"
        />
        <AdvertItem
          imageUrl="/src/assets/images/advert/advert_3.gif"
          altText="Advert 3"
          linkUrl="https://6789x.site/ad9namei77"
        />
      </AdvertList>
      <p className="advert-content mt-4 py-2 px-1 border border-dashed border-red-400 rounded-2xl text-shadow-white">
        Truy cập 
        <i class="fa-solid fa-hand-point-right text-icon-red ml-1"></i>
        <span className="font-bold text-[18px] text-white">Motchill.Fm</span>
        <i class="fa-solid fa-hand-point-left text-icon-red mr-1"></i>
        để lấy link mới nếu bạn không vào được. 🙌
      </p>
    </div>
  );
};

export default Advert;
