import React, { useState} from "react";
import { Link, useLocation  } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineUser
} from "react-icons/ai";
import s from "./Header.module.scss";
import "./Header.module.scss";



const Header = () => {
  const location = useLocation();
  const [header, setHeader] = useState(false);
  return (
    <div>
      <header className={location.pathname ==='/'? s.header : s.red_header}>
        <Link className={location.pathname ==='/'? s.logo : s.black_logo} to="/">préparer</Link>
        <ul className={header ? [s.menu, s.active].join(" ") : [s.menu]}>
          <li className={s.li_links}>
            <Link className={location.pathname ==='/'? s.logo : s.black_link} to="/">
              home
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={location.pathname ==='/'? s.link : s.black_link} to="/about-us">
              about us
            </Link>
          </li>
          <li className={s.li_links}>
            <Link className={location.pathname ==='/'? s.link : s.black_link} to="blog">
              partners
            </Link>
          </li>
          <li className={s.li_links}>
            <Link to="categories" className={location.pathname ==='/'? s.link : s.black_link}>
              categories
            </Link>
          </li>
          <div>
            <div className={s.icons}>
              <Link to='search'>
                <AiOutlineSearch className={location.pathname ==='/'? s.icon : s.icon_black} />
              </Link>
            <p className={s.search_title}>Search</p>
            <Link to='favorites'>
            <AiFillHeart className={location.pathname ==='/'? s.save : s.save_black} /> 
            </Link>
            <p className={s.save_title}>Save</p>
            <Link to='user'>
            <AiOutlineUser className={location.pathname ==='/'? s.avatar : s.avatar_black} />
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