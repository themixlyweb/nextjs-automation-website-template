import Image from 'next/image';
import Carousel from 'components/Carousel';
const CardCarousal = ({ arr, classes }) => {
  return (
    <div className={`row gx-lg-8 gx-xl-12 gy-10 align-items-center ${classes ? classes : ''}`}>
      <div className="swiper-container nav-bottom nav-color">
        <Carousel
          navigation={true}
          pagination={false}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 4
            }
          }}
          speed={1000}
        >
          {arr.map((item) => (
            <div className="rounded mt-2" key={item.id}>
              <figure className="m-0">
                <Image
                  src={item.img}
                  alt={`${item.title} | Shanjanand Enterprise`}
                  layout="fill"
                  className="position-static"
                />
              </figure>
              <div className="d-flex flex-column align-items-center py-2">
                <h3 className="fs-20 m-0 px-1 text-center">{item.title}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CardCarousal;
