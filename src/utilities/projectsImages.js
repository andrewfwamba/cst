import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { isMobile } from "react-device-detect";
import { Image } from "antd";

const Mobileimages = ({ imagesarray, type }) => {
  return (
    // <Swiper
    //   slidesPerView={type === "m" ? (isMobile ? 1 : 4) : 1}
    //   spaceBetween={1}
    //   slidesPerGroup={1}
    //   loop={true}
    //   loopFillGroupWithBlank={true}
    //   autoplay={{
    //     delay: 3000,
    //     disableOnInteraction: false,
    //   }}
    //   speed={2000}
    //   shortSwipes={false}
    //   modules={[Autoplay, Pagination, Navigation]}
    //   navigation={true}
    //   style={{
    //     "--swiper-pagination-color": "#000",
    //     "--swiper-navigation-color": "#000",
    //     "--swiper-navigation-size": "20px",
    //   }}
    // >
    <div>
      <Image.PreviewGroup>
        <div className="flex md:flex-row flex-wrap gap-2 space-y-2 justify-center items-center md:space-x-2">
          {Array.isArray(imagesarray) &&
            imagesarray.map((val, key) => {
              return (
                <Image
                  key={key}
                  width={300}
                  height={200}
                  src={val}
                  className="rounded-lg shadow-lg shadows-gray-500 border border-gray-400 h-[3rem] object-cover"
                />
              );
            })}
        </div>
      </Image.PreviewGroup>
      {/* </Swiper> */}
    </div>
  );
};

export default Mobileimages;
