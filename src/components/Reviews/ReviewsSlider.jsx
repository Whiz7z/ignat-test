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

  const left = REVIEWS.length % 4;
  const filledPages = Math.floor(REVIEWS.length / 4);

  let nestedArray = [];

  if (left > 0) {
    nestedArray.push(REVIEWS.slice(0, left));
  }

  for (let i = 0, j = left; i < filledPages; i++, j = j + 4) {
    // if (nestedArray.length === filledPages + 1) {
    //   break;
    // }
    //console.log(j);
    nestedArray.push(REVIEWS.slice(j, j + 4));
  }

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
        {nestedArray.length > 0 &&
          nestedArray.map((array, index) => (
            <SwiperSlide key={index}>
              {array.length === 1 ? (
                <>
                  <div className="card empty">
                    <Plus />
                  </div>
                  <div className="card empty">
                    <Plus />
                  </div>
                  <div className="card empty">
                    <Plus />
                  </div>
                </>
              ) : array.length === 2 ? (
                <>
                  <div className="card empty">
                    <Plus />
                  </div>
                  <div className="card empty">
                    <Plus />
                  </div>
                </>
              ) : array.length === 3 ? (
                <div className="card empty">
                  <Plus />
                </div>
              ) : null}
              {array.map((item) => (
                <ReviewCard key={item.id} {...item} />
              ))}
            </SwiperSlide>
          ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};

export default ReviewsSlider;
