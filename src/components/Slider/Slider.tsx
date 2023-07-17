import "swiper/css";
import "swiper/css/effect-cube";
import s from "./Slider.module.scss";
import PlayIcon from "@/assets/images/icons/play.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";
import { sliderList } from "@/utils/app-data";
import { Button } from "../UI/Button/Button";

export const Slider = () => {
  return (
    <div className={s.slider}>
      <div className="container">
        <Swiper
          spaceBetween={130}
          slidesPerView={1}
          coverflowEffect={{ rotate: 0, scale: 0.9, slideShadows: false }}
          modules={[EffectCoverflow, Pagination]}
          effect="coverflow"
          pagination={{ clickable: true }}
        >
          {sliderList.map((item) => (
            <SwiperSlide key={item.title}>
              <div className={`${s.item} ${item.btn ? "" : s.yellow}`}>
                <div className={s.content}>
                  <h2 className={s.title}>{item.title}</h2>
                  {item.btn && (
                    <Button className="black-btn">
                      {item.btn}
                      <PlayIcon />
                    </Button>
                  )}
                </div>
                {item.img && <Image src={item.img} alt="steak" />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
