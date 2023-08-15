import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.module.css";
import avatar from "../../../assets/user-128.png";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart,} from "react-icons/ai";
import s from "./Header.module.css";

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div>
      <header className={s.header}>
        <Link to="/">préparer</Link>
        <ul className={header ? [s.menu, s.active].join(" ") : [s.menu]}>
          <li className={s.li_links}>
            <Link className={s.links} to="/">
              Home
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={s.links} to="/about-us">
              About Us
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={s.links} to="blog">
              Blog
            </Link>
          </li>
          <li className={s.li_links}>
            <Link to="categories" className={s.links}>
              Categories
            </Link>
          </li>
          <li className={s.li_links}>
            <Link to="favorites" className={s.li_links}>
              <AiOutlineHeart className={s.icons} />
            </Link>
          </li>

          <div>
            <div className={s.icons}>
              <AiOutlineSearch className={s.icon} />
              <p className={s.search_title}>Search</p>
              {/* <img className={s.save} src={save} alt="" />
            <p className={s.save_title}>Save</p> */}

              {/* <AiOutlineHeart className={s.icons} /> */}
              <img className={s.avatar} src={avatar} alt="" />
            </div>
          </div>
          <p className={s.username}>Eva S.</p>
        </ul>
        <div onClick={() => setHeader(!header)} className={s.mobile_btn}>
          {header ? (
            <AiOutlineClose size={30} color="black" className={s.header_icon} />
          ) : (
            <AiOutlineMenu size={30} color="black" className={s.header_icon} />
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
