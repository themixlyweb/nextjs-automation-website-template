const animation = ({ name, delay }) => {
  return {
    animationName: name,
    animationDelay: delay,
    animationFillMode: 'both',
    animationDuration: '900ms',
    animationDirection: 'normal',
    animationTimingFunction: 'ease'
  };
};

export const slideInDownAnimate = (delay) =>
  animation({
    name: 'slideInDown',
    delay
  });

export const slideInUpAnimate = (delay) =>
  animation({
    name: 'slideInUp',
    delay
  });

export const slideInRightAnimate = (delay) =>
  animation({
    name: 'slideInRight',
    delay
  });

export const slideInLeftAnimate = (delay) =>
  animation({
    name: 'slideInLeft',
    delay
  });

export const zoomInAnimate = (delay) =>
  animation({
    name: 'zoomIn',
    delay
  });

export const fadeInAnimate = (delay) =>
  animation({
    name: 'fadeIn',
    delay
  });

export const fadeInLeft = (delay) =>
  animation({
    name: 'fadeInLeft',
    delay
  });

    
export const fadeInUp = (delay) =>
  animation({
    name: 'fadeInUp',
    delay
  });
  

export default animation;
