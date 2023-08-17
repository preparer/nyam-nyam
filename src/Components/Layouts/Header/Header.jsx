import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineUser
} from "react-icons/ai";
import s from "./Header.module.scss";

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div>
      <header className={s.header}>
        <Link className={s.logo} to="/">préparer</Link>
        <ul className={header ? [s.menu, s.active].join(" ") : [s.menu]}>
          <li className={s.li_links}>
            <Link className={s.links} to="/">
              home
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={s.links} to="/about-us">
              about us
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={s.links} to="blog">
              blog
            </Link>
          </li>
          <li className={s.li_links}>
            <Link to="categories" className={s.links}>
              categories
            </Link>
          </li>
          <div>
            <div className={s.icons}>
              <Link to='search'>
                <AiOutlineSearch className={s.icon} />
              </Link>
            <p className={s.search_title}>Search</p>
            <Link to='favorites'>
            <AiFillHeart className={s.save} /> 
            </Link>
            <p className={s.save_title}>Save</p>
            <Link to='user'>
            <AiOutlineUser className={s.avatar} />
            </Link>
          </div>
          </div>
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