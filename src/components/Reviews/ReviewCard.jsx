import RatingStar from "../../svg/RatingStar";
import userPhoto from "../../images/userPhoto.png";

const ReviewCard = ({ review, name, rating }) => {
  let ratingStars;

  if (rating === 5) {
    ratingStars = (
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
          <RatingStar isFull />
        </span>
      </div>
    );
  } else if (rating === 4) {
    ratingStars = (
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
    );
  } else if (rating === 3) {
    ratingStars = (
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
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
      </div>
    );
  } else if (rating === 2) {
    ratingStars = (
      <div className="rating">
        <span>
          <RatingStar isFull />
        </span>
        <span>
          <RatingStar isFull />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
      </div>
    );
  } else if (rating === 1) {
    ratingStars = (
      <div className="rating">
        <span>
          <RatingStar isFull />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
        <span>
          <RatingStar isFull={false} />
        </span>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="user">
        <div className="user-photo">
          <img src={userPhoto} alt="user" />
        </div>
        <div className="user-info">
          {ratingStars}
          <p className="name">{name}</p>
        </div>
      </div>
      <div className="user-review">
        <p>
          Дуже задоволений якістю обслуговування і самою продукцією. Купували
          термобілизну у подарунок, друзі...
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
