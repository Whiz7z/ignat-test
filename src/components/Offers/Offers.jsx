import offerLeft from "../../images/offerLeft.png";
import offerRight from "../../images/offerRight.png";
import offerMid from "../../images/offerMid.png";
import OfferCard from "./OfferCard";
import ArrowsDown from "./../../svg/ArrowsDown";

import "./Offers.scss";
const OFFERS = [
  {
    id: 1,
    title: "Термобілизна для бодіболдерів",
    price: "4000 грн.",
    img: offerLeft,
  },
  {
    id: 2,
    title: "Термобілизна для бодіболдерів",
    price: "4000 грн.",
    img: offerMid,
  },
  {
    id: 3,
    title: "Термобілизна для бодіболдерів",
    price: "4000 грн.",
    img: offerRight,
  },
];
const Offers = () => {
  return (
    <section className="offers-container">
      <h3>Що може сподобатись</h3>
      <div className="offers">
        {OFFERS.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
      <div className="more-btn">
        <button>Дивитися більше</button>
        <div className="arrows">
          <ArrowsDown />
        </div>
      </div>
    </section>
  );
};

export default Offers;
