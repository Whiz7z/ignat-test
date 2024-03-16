import { useState } from "react";

import Heart from "../../svg/Heart";
import Bag from "../../svg/Bag";
import ArrowUp from "./../../svg/ArrowUp";

const ProductInfo = () => {
  const [activeeSize, setActiveeSize] = useState(3);
  const [activeColor, setActiveColor] = useState(0);
  return (
    <section className="product-info">
      <div className="main-info">
        <h1 className="title">Чоловічий Термокостюм Atlantic</h1>
        <p className="type">Термокостюм</p>

        <p className="price">3700 грн.</p>
      </div>

      <div className="size-picker">
        <p>Оберіть розмір</p>
        <div className="sizes">
          <span
            className={`size ${activeeSize === 0 ? "active" : ""}`}
            onClick={() => setActiveeSize(0)}
          ></span>
          <span
            className={`size ${activeeSize === 1 ? "active" : ""}`}
            onClick={() => setActiveeSize(1)}
          ></span>
          <span
            className={`size ${activeeSize === 2 ? "active" : ""}`}
            onClick={() => setActiveeSize(2)}
          ></span>
          <span
            className={`size ${activeeSize === 3 ? "active" : ""}`}
            onClick={() => setActiveeSize(3)}
          ></span>
          <span
            className={`size ${activeeSize === 4 ? "active" : ""}`}
            onClick={() => setActiveeSize(4)}
          ></span>
          <span
            className={`size ${activeeSize === 5 ? "active" : ""}`}
            onClick={() => setActiveeSize(5)}
          ></span>
          <span
            className={`size ${activeeSize === 6 ? "active" : ""}`}
            onClick={() => setActiveeSize(6)}
          ></span>
        </div>
      </div>

      <div className="color-picker">
        <p>Оберіть колір</p>
        <div className="colors">
          <span
            className={`color white ${activeColor === 0 ? "active" : ""}`}
            onClick={() => setActiveColor(0)}
          >
            {activeColor === 0 ? (
              <div className="arrow">
                <ArrowUp />
              </div>
            ) : null}
          </span>
          <span
            className={`color grey ${activeColor === 1 ? "active" : ""}`}
            onClick={() => setActiveColor(1)}
          >
            {activeColor === 1 ? (
              <div className="arrow">
                <ArrowUp />
              </div>
            ) : null}
          </span>
          <span
            className={`color dark  ${activeColor === 2 ? "active" : ""}`}
            onClick={() => setActiveColor(2)}
          >
            {activeColor === 2 ? (
              <div className="arrow">
                <ArrowUp />
              </div>
            ) : null}
          </span>
        </div>
      </div>

      <div className="description-container">
        <h2>Інформація про товар</h2>
        <div className="description">
          <p>
            <p className="bold">
              Терморегуляція забезпечить вам тепло в будь-якій ситуації.
            </p>
            Сучасні технології дозволяють нашому термокостюму адаптуватися до
            вашого тіла та навколишнього середовища.
          </p>
          <p>
            <p className="bold">
              Легкість та еластичність для максимальної свободи рухів.
            </p>
            Забудьте про невигоди - наш термокостюм розроблений з урахуванням
            вашої активності.
          </p>
          <p>
            <p className="bold">Дихаючі тканини для оптимальної вентиляції.</p>
            Забудьте про потовиділення - наш термокостюм дозволяє шкірі{" "}
            {`"дихати"`}, забезпечуючи вам комфорт під час активної діяльності.
          </p>
        </div>
      </div>

      <div className="actions">
        <hr />

        <div className="btns">
          <button className="order btn">Оформити замовлення</button>
          <button className="buy btn">Купити у кредит</button>

          <div className="actions-btn">
            <button className="to-favorite">
              <Heart />
            </button>
            <button className="to-cart">
              <Bag />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
