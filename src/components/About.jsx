import React, { useMemo } from 'react';
import Image from 'next/image';
import NextLink from './NextLink';
import ListColumn from './ListColumn';
import UseIntersectionObserver from './UseIntersectionObserver';
import { slideInLeftAnimate, slideInRightAnimate } from './animation';

const About = (props) => {
  const {
    heading,
    headingH1,
    subHeading,
    para,
    para2,
    para3,
    imgPosition = 'right',
    src,
    btnTitle,
    btnUrl,
    video,
    list,
    products,
  } = props;

  // Trigger animations on intersection
  const [elementRef, isVisible] = UseIntersectionObserver({ threshold: 0.1 });

  // Memoize animation directions based on image position
  const imgAnimation = useMemo(
    () => (imgPosition === 'left' ? slideInLeftAnimate('0.3s') : slideInRightAnimate('0.3s')),
    [imgPosition]
  );
  const textAnimation = useMemo(
    () => (imgPosition === 'left' ? slideInRightAnimate('0.3s') : slideInLeftAnimate('0.3s')),
    [imgPosition]
  );

  // Conditionally render video or image
  const renderMedia = () => {
    if (video?.src) {
      return (
        <video
          className="mr-5"
          style={{ maxWidth: '100%', borderRadius: '10px' }}
          autoPlay
          muted
          loop
          src={video.src}
        />
      );
    }

    return (
      <Image
        alt={`${headingH1 || heading} | AutoFlow`}
        src={src}
        width={535}
        height={225}
        layout="responsive"
        className="position-static"
      />
    );
  };

  return (
    <div className="row gx-lg-10 align-items-center" ref={elementRef}>
      {/* Media Column */}
      <div
        className={`col-lg-5 ${imgPosition === 'right' ? 'order-lg-2' : 'order-lg-1'} ${
          isVisible ? 'animate' : ''
        } about-us-image`}
        style={isVisible ? imgAnimation : {}}
      >
        <div className="about-img">
          <figure className={`reveal image-anime rounded-xl ${products ? '' : 'shadow-lg'}`}>
            {renderMedia()}
          </figure>
        </div>
      </div>

      {/* Text Column */}
      <div
        className={`col-lg-7 ${imgPosition === 'right' ? 'order-lg-1' : 'order-lg-2'} ${
          isVisible ? 'animate' : ''
        }`}
        style={isVisible ? textAnimation : {}}
      >
        {/* Optional Subheading Tag */}
        {subHeading && (
          <h3 className="fs-15 py-2 px-3 primary-bg-soft text-main d-inline rounded-pill">{subHeading}</h3>
        )}

        {/* Main Heading (H1 or H2 based on availability) */}
        {headingH1 && (
          <h1 className="fw-bold fs-40 my-3">
            <span className="underline-wrapper orange fs-36">{headingH1}</span>
          </h1>
        )}

        {heading && <h2 className="underline-wrapper fs-40 my-3">{heading}</h2>}

        {/* Paragraphs */}
        {para && <p className="mb-8 text-justify">{para}</p>}
        {para2 && <p className="mb-3 text-justify">{para2}</p>}
        {para3 && <p className="mb-3 text-justify">{para3}</p>}

        {/* Button Link */}
        {btnTitle && btnUrl && (
          <div className="mt-5">
            <NextLink title={btnTitle} href={btnUrl} className="btn btn-md bg-primary text-white rounded" />
          </div>
        )}

        {/* Optional Bullet/List Column */}
        {list && <ListColumn list={list} />}
      </div>
    </div>
  );
};

export default About;
