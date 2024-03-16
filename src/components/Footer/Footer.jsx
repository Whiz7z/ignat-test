import TopFooter from "./TopFooter";
import "./Footer.scss";
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
