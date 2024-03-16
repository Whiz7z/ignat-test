import SmallHeart from "./../../svg/SmallHeart";

const OfferCard = ({ img, title, price }) => {
  return (
    <div className="card">
      <div className="photo">
        <img src={img} alt="" />
        <div className="to-favorites">
          <SmallHeart />
        </div>
      </div>
      <div className="info">
        <h4>{title}</h4>
        <p className="sex-colors">
          Для чоловіків
          <br />
          Два кольори
        </p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default OfferCard;
