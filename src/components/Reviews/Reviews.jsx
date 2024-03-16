import ReviewsSlider from "./ReviewsSlider";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <h3>
          Відгуки про товар
          <span>{`(11)`}</span>
        </h3>
      </div>
      <ReviewsSlider />
    </section>
  );
};

export default Reviews;
