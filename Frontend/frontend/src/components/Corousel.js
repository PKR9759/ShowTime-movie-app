import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

const items = [
  {
    src: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/02/4-4.jpg?ssl=1&quality=80&w=640&h=480',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://i.ytimg.com/vi/6amIq_mP4xM/maxresdefault.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://i.ytimg.com/vi/6Pf6RUmq7S0/maxresdefault.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const Corousel = () => {
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

  const slides = items.map((item) => (
    <CarouselItem key={item.key} style={{width:'50%'}}>
      <img src={item.src} alt={item.altText} style={{ width: '100%', height: '100%', maxHeight: '500px', objectFit: 'cover' }} />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default Corousel;
