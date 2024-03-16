import mainImg from "../../images/mainProdImg.png";
import firstImg from "../../images/firstProdImg.png";
import secondImg from "../../images/secondProdImg.png";
import thirdImg from "../../images/thirdProdImg.png";

const ProductImages = () => {
  return (
    <section className="pictures-container">
      <div className="main-img">
        <img src={mainImg} alt="main-img" />
      </div>
      <div className="other-imgs">
        <div className="other-img-item">
          <img src={firstImg} alt="clothes" />
        </div>
        <div className="other-img-item">
          <img src={secondImg} alt="clothes" />
        </div>
        <div className="other-img-item">
          <img src={thirdImg} alt="clothes" />
        </div>
      </div>
    </section>
  );
};

export default ProductImages;
