// app/components/ProductSlider.tsx
import {Swiper, SwiperSlide} from 'swiper/react';
import type {Image} from '@shopify/hydrogen/storefront-api-types';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import {Navigation, Thumbs} from 'swiper/modules';
import {useState} from 'react';

interface ProductSliderProps {
  images: Image[];
}

export function ProductSlider({images}: ProductSliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="product-slider">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        modules={[Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt={image.altText || 'Product Image'} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt={image.altText || 'Product Image'} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
