import { useEffect, useRef, useState } from "react";
import ArrowLeft from "./../../svg/ArrowLeft";
import ArrowRight from "./../../svg/ArrowRight";
import Plus from "./../../svg/Plus";
import ReviewCard from "./ReviewCard";
import { Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const REVIEWS = [
  {
    id: 1,
    name: "Іван Іванов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 2,
    name: "Тарас Тарасов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 3,
    name: "Євген Євгенов",
    rating: 3,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 4,
    name: "Коля Колянов",
    rating: 3,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 5,
    name: "Андрій Андрійов",
    rating: 4,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 6,
    name: "Павло Павлов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 7,
    name: "Осип Осипов",
    rating: 4,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 8,
    name: "Назар Назаров",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 9,
    name: "Вова Вовов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 10,
    name: "Салат Салатов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
  {
    id: 11,
    name: "Лев Повидлов",
    rating: 5,
    review:
      "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
  },
];

const ReviewsSlider = () => {
  const [page, setPage] = useState(1);

  const [swiperRef, setSwiperRef] = useState();

  const ArrowLeftHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const ArrowRightHandler = () => {
    if (page < 3) {
      setPage(page + 1);
    }
  };

  return (
    <div className="reviews-slider">
      <div className="navigation">
        <div className="pages">
          <span>0{page}</span>
          <span>/</span>
          <span>03</span>
        </div>
        <div className="arrows">
          <span
            onClick={() => {
              swiperRef.slidePrev();
              ArrowLeftHandler();
            }}
          >
            <ArrowLeft color={page === 1 ? "#959595" : "black"} />
          </span>
          <span
            onClick={() => {
              swiperRef.slideNext();
              ArrowRightHandler();
            }}
          >
            <ArrowRight color={page === 3 ? "#959595" : "black"} />
          </span>
        </div>
      </div>

      <Swiper
        className="swiper"
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        a11y={{ enabled: true }}
        style={{ position: "relative", paddingTop: "30px" }}
      >
        <SwiperSlide>
          <div className="card empty">
            <Plus />
          </div>
          <ReviewCard {...REVIEWS[0]} />
          <ReviewCard {...REVIEWS[1]} />
          <ReviewCard {...REVIEWS[2]} />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard {...REVIEWS[3]} />
          <ReviewCard {...REVIEWS[4]} />
          <ReviewCard {...REVIEWS[5]} />
          <ReviewCard {...REVIEWS[6]} />
        </SwiperSlide>

        <SwiperSlide>
          <ReviewCard {...REVIEWS[7]} />
          <ReviewCard {...REVIEWS[8]} />
          <ReviewCard {...REVIEWS[9]} />
          <ReviewCard {...REVIEWS[10]} />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default ReviewsSlider;
