import Image from 'next/image';
import Carousel from 'components/Carousel';

/**
 * Hero Component
 * Renders a full-width animated image carousel with slide content.
 *
 * @param {Array} arr - Array of slide objects with fields:
 *   image (string), title (string), description (string),
 *   animation (string), delay (number), delay2 (number), position ('start' | 'center' | 'end')
 */
const Hero = ({ arr }) => {
  return (
    <div className="wrapper bg-dark">
      <div className="swiper-container swiper-hero dots-over">
        <Carousel
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
        >
          {arr.map((slide, index) => (
            <div
              className={`swiper-slide animate__animated animate__${slide.animation} position-relative`}
              key={index}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="swiper-slide-bg"
                priority={index === 0} // Prioritize first image for faster load
              />

              {/* Slide Content */}
              <div className="container h-100 d-flex flex-column justify-content-center align-items-md-start align-items-center position-relative z-1">
                <div className={`row w-100 d-flex justify-content-md-${slide.position}`}>
                  <div className="col-lg-6 col-md-6 text-left hero-text-bg p-5">
                    <h2
                      className={`display-1 fs-32 mb-1 mb-md-3 text-white animate__animated animate__${slide.animation} animate__delay-${slide.delay}`}
                    >
                      {slide.title}
                    </h2>
                    <p
                      className={`hero-p text-white animate__animated animate__${slide.animation} animate__delay-${slide.delay2} m-0`}
                    >
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
