import { FC } from "react";
import { Link } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <footer>
      <Link to="/" className="home__link">
        Home
      </Link>
      <a href="https://github.com/polynceva-es/" target="_blanck">
        development by Ekaterina Polyntseva
      </a>
    </footer>
  );
};
