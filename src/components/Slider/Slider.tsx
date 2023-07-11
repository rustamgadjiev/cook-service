import "swiper/css";
import "swiper/css/effect-cube";
import s from "./Slider.module.scss";
import PlayIcon from "@/assets/images/icons/play.svg";
import steak from "../../assets/images/steak.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectCoverflow, Pagination } from "swiper";

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
          <SwiperSlide>
            <div className={s.item}>
              <div className={s.content}>
                <h2 className={s.title}>
                  Доставка из ресторана в керамической <br /> посуде
                </h2>
                <button className={s.btn}>
                  Сториз о сервисе
                  <PlayIcon />
                </button>
              </div>
              <Image src={steak} alt="steak" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${s.item} ${s.yellow}`}>
              <div className={s.content}>
                <h2 className={s.title}>Великолепный баннер</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${s.item} ${s.yellow}`}>
              <div className={s.content}>
                <h2 className={s.title}>Великолепный баннер</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${s.item} ${s.yellow}`}>
              <div className={s.content}>
                <h2 className={s.title}>Великолепный баннер</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${s.item} ${s.yellow}`}>
              <div className={s.content}>
                <h2 className={s.title}>Великолепный баннер</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
