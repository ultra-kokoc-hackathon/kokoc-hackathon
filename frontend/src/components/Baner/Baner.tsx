'use client';
import styles from './baner.module.scss';
import Image from 'next/image';
import Left from './../../../public/arrow-l.svg';
import Right from './../../../public/arrow-r.svg';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useSwiperControls } from './../../hooks/useSwiperControls';
import { useRef } from 'react';
import BanerImage from './../../../public/image.png';

const Baner = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { changeSlideBtn, handleDisBtn } =
    useSwiperControls(swiperRef);

  return (
    <div className={styles.baner}>
      <div className={styles.banerWrapper}>
        <SwiperComponent
          onTransitionEnd={() => {
            handleDisBtn();
          }}
          tag='ul'
          freeMode={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <Image
              src={BanerImage}
              alt='Картинка банера'
              className={styles.banerImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={BanerImage}
              alt='Картинка банера'
              className={styles.banerImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={BanerImage}
              alt='Картинка банера'
              className={styles.banerImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={BanerImage}
              alt='Картинка банера'
              className={styles.banerImage}
            />
          </SwiperSlide>
        </SwiperComponent>

        <button className={`${styles.button} ${styles.left}`}>
          <Image
            src={Left}
            alt='кнопка влево'
            onClick={() => changeSlideBtn('prev')}
          />
        </button>
        <button className={`${styles.button} ${styles.right}`}>
          <Image
            src={Right}
            alt='кнопка влево'
            onClick={() => changeSlideBtn('next')}
          />
        </button>
      </div>
    </div>
  );
};

export default Baner;
