'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const MainSlider = () => {
  return (
    <section className="main-slider clearfix">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{ delay: 4000 }}
        className="swiper-container thm-swiper__slider"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(assets/img/backgrounds/main-slider-1.png)`,
              }}
            ></div>

            <div
              className="main-slider-shape-1"
              style={{
                backgroundImage: `url(assets/img/shapes/main-slider-shape-1.jpg)`,
              }}
            ></div>
            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/img/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row right">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Education changes lives
                    </p>
                    <h2 className="main-slider__title">
                      Unlocking Futures with Grassroots Education and
                      Opportunity
                    </h2>

                    <div className="main-slider__btn-box">
                      <a href="/about" className="thm-btn main-slider__btn">
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage: `url(assets/img/backgrounds/main-slider-2.png)`,
              }}
            ></div>

            <div
              className="main-slider-shape-1"
              style={{
                backgroundImage: `url(assets/img/shapes/main-slider-shape-1.jpg)`,
              }}
            ></div>
            <div className="main-slider-shape-2 float-bob-x">
              <img src="assets/img/shapes/main-slider-shape-2.png" alt="" />
            </div>

            <div className="container">
              <div className="row right">
                <div className="col-lg-8">
                  <div className="main-slider__content">
                    <p className="main-slider__sub-title">
                      Building brighter futures together
                    </p>
                    <h2 className="main-slider__title">
                      Empowering Communities Through Learning and Growth
                    </h2>

                    <div className="main-slider__btn-box">
                      <a href="/about" className="thm-btn main-slider__btn">
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>

        {/* Navigation buttons */}
        <div className="main-slider__nav">
          <div className="swiper-button-prev">
            <i className="icon-left-arrow"></i>
          </div>
          <div className="swiper-button-next">
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
