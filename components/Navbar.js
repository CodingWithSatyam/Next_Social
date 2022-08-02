import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdNotificationsNone } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src='../images/logo.png'  />
        </div>
        <div className={styles.pages}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
          </ul>
        </div>
        <div className={styles.icons}>
          <abbr title="Home">
            <AiOutlineHome className={styles.icon} />
          </abbr>
          <abbr title="Search">
            <BiSearchAlt2 className={styles.icon} />
          </abbr>
          <abbr title="Notifications">
            <MdNotificationsNone className={styles.icon} />
          </abbr>
          <abbr title="Post">
            <MdModeEdit className={styles.icon} />
          </abbr>
          <abbr title="Profile">
            <CgProfile className={styles.icon} />
          </abbr>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
