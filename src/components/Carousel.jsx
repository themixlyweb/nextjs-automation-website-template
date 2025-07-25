import { Fragment, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

/**
 * Carousel Component
 * Wrapper around Swiper.js with optional navigation and pagination controls.
 *
 * @param {React.ReactNode[]} children - Slides to render inside the carousel.
 * @param {string} slideClassName - Optional class for each slide.
 * @param {number} spaceBetween - Space between slides in px (default: 30).
 * @param {number} slidesPerView - Number of slides visible at once (default: 3).
 * @param {boolean} pagination - Enable pagination dots (default: true).
 * @param {boolean} navigation - Enable navigation arrows (default: true).
 * @param {object} others - Other Swiper props to pass.
 */
const Carousel = ({
  children,
  slideClassName,
  spaceBetween = 30,
  slidesPerView = 3,
  pagination = true,
  navigation = true,
  ...others
}) => {
  // Refs for navigation buttons and pagination container
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);

  return (
    <Fragment>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={
          navigation
            ? {
                prevEl,
                nextEl,
              }
            : false
        }
        pagination={
          pagination
            ? {
                clickable: true,
                el: paginationEl,
              }
            : false
        }
        {...others}
      >
        {children.map((slide, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation & pagination controls */}
      <div className="swiper-controls">
        {navigation && (
          <div className="swiper-navigation">
            <div
              role="button"
              ref={setPrevEl}
              className="swiper-button swiper-button-prev"
            />
            <div
              role="button"
              ref={setNextEl}
              className="swiper-button swiper-button-next"
            />
          </div>
        )}
        {pagination && <div className="swiper-pagination" ref={setPaginationEl} />}
      </div>
    </Fragment>
  );
};

export default Carousel;
