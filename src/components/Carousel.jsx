import { useState } from 'react';
import {
  Carousel as BCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const Carousel = ({ items, controls = true, indicators = true }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div
          className="carousel-image"
          style={{
            width: '100%',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${item.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <CarouselCaption
          captionText={
            <span style={{ textShadow: '2px 2px 4px #000' }}>
              {item.captionText}
            </span>
          }
          captionHeader={
            <span style={{ textShadow: '2px 2px 3px #000' }}>
              <b>{item.captionHeader}</b>
            </span>
          }
        />
      </CarouselItem>
    );
  });

  return (
    <BCarousel activeIndex={activeIndex} next={next} previous={previous}>
      {indicators && (
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
      )}
      {slides}
      {controls && (
        <>
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </>
      )}
    </BCarousel>
  );
};

export default Carousel;
