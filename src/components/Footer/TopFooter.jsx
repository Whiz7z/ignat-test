const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="contact block">
        <h5>Контакт - центр</h5>
        <ul>
          <li>098 900 09 09 </li>
          <li>Пн - Пт 09:00 - 21:00</li>
          <li>Пн - Пт 09:00 - 21:00</li>
        </ul>
      </div>
      <div className="clients block">
        <h5>Покупцям</h5>
        <ul>
          <li>
            <a href="#">Оплата і доставка</a>
          </li>
          <li>
            <a href="#">Повернення</a>
          </li>
          <li>
            <a href="#">Питання та відповіді</a>
          </li>
        </ul>
      </div>
      <div className="profile block">
        <h5>Особистий кабінет</h5>
        <ul>
          <li>
            <a href="#">Мої дані</a>
          </li>
          <li>
            <a href="#">Історія замовлень</a>
          </li>
          <li>
            <a href="#">Улюблені</a>
          </li>
          <li>
            <a href="# ">Розсилки</a>
          </li>
        </ul>
      </div>
      <div className="about block">
        <h5>Про компанію</h5>
        <ul>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Новини</a>
          </li>
          <li>
            <a href="#">Стати партнером</a>
          </li>
          <li>
            <a href="# ">Угода користувача</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopFooter;
