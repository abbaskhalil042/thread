import { AlignRight, Edit3, Heart, Home, Search, User } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between mt-5">
      <div>
        <img
          className="w-20"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt=""
        />
      </div>
      <div className="flex gap-16">
        <ul>
          <li className="hover:text-gray-500 transition-all ">
            <Link to="/">
              <Home />
            </Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-gray-500 transition-all ">
            <Link to="/search">
              <Search />
            </Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-gray-500 transition-all ">
            <Link to="/edit">
              <Edit3 />
            </Link>
          </li>
        </ul>
        <ul>
          <li className="hover:text-gray-500 transition-all ">
            <Heart />
          </li>
        </ul>
        <ul>
          <li className="hover:text-gray-500 transition-all ">
            <User />
          </li>
        </ul>
      </div>
      <div>
        <span>
          <AlignRight />
        </span>
      </div>
    </header>
  );
};

export default Header;
