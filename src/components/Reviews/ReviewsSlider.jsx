import { useEffect, useState } from "react";
import ArrowLeft from "./../../svg/ArrowLeft";
import ArrowRight from "./../../svg/ArrowRight";
import Plus from "./../../svg/Plus";
import ReviewCard from "./ReviewCard";

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

  let reviews;
  if (page === 1) {
    reviews = REVIEWS.slice(0, 3 * page);
  } else if (page === 2) {
    reviews = REVIEWS.slice(3, 7);
  } else if (page === 3) {
    reviews = REVIEWS.slice(7, 11);
  }

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
          <span>01</span>
          <span>/</span>
          <span>03</span>
        </div>
        <div className="arrows">
          <span onClick={() => ArrowLeftHandler()}>
            <ArrowLeft color={page === 1 ? "#959595" : "black"} />
          </span>
          <span onClick={() => ArrowRightHandler()}>
            <ArrowRight color={page === 3 ? "#959595" : "black"} />
          </span>
        </div>
      </div>

      <div className="slider">
        {reviews.length === 3 && (
          <div className="card empty">
            <Plus />
          </div>
        )}

        {reviews.map((review) => {
          return <ReviewCard key={review.id} {...review} />;
        })}

        {/* <div className="card">
          <div className="user">
            <div className="user-photo">
              <img src={userPhoto} alt="user" />
            </div>
            <div className="user-info">
              <div className="rating">
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull={false} />
                </span>
              </div>
              <p className="name">Жора Ремінгтон</p>
            </div>
          </div>
          <div className="user-review">
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </div>

        <div className="card">
          <div className="user">
            <div className="user-photo">
              <img src={userPhoto} alt="user" />
            </div>
            <div className="user-info">
              <div className="rating">
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull={false} />
                </span>
              </div>
              <p className="name">Жора Ремінгтон</p>
            </div>
          </div>
          <div className="user-review">
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </div>

        <div className="card">
          <div className="user">
            <div className="user-photo">
              <img src={userPhoto} alt="user" />
            </div>
            <div className="user-info">
              <div className="rating">
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull />
                </span>
                <span>
                  <RatingStar isFull={false} />
                </span>
              </div>
              <p className="name">Жора Ремінгтон</p>
            </div>
          </div>
          <div className="user-review">
            <p>
              Дуже задоволений якістю обслуговування і самою продукцією.
              Купували термобілизну у подарунок, друзі...
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewsSlider;
