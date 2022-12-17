import { Swiper, SwiperSlide } from "swiper/react";

// import styles bundle
import "swiper/css/bundle";
import styles from "../../styles/Swiper.module.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        className={styles.swiper}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.text}>
            <p>WORLD:</p>
            <p className={styles.textSp}>
              <i> Quam adipiscing vitae pro</i>{" "}
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> in sagit tis nisl magna fermentum iaculis eu non</i>
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> diam phasel lus vestibul..</i>
            </p>
            <p className={styles.textLast}>Amy Pullman</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.text}>
            <p>WORLD:</p>
            <p className={styles.textSp}>
              <i> Lorem ipsum dolor sit amet,</i>{" "}
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> consectetur adipiscing elit, sed do eiusmod labore et</i>
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> dolore magna aliqua.</i>
            </p>
            <p className={styles.textLast}>Yvonne Nolan</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.text}>
            <p>NY TIMES:</p>
            <p className={styles.textSp}>
              <i> Quam adipiscing vitae pro</i>{" "}
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> in sagit tis nisl magna fermentum iaculis eu non</i>
            </p>
            <p className={styles.textSp}>
              {" "}
              <i> diam phasel lus vestibul..</i>
            </p>
            <p className={styles.textLast}>Joshua Peake</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
