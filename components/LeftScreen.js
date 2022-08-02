import React from "react";
import styles from '../styles/LeftScreen.module.css';
import { AiFillHome } from "react-icons/ai";
import { BiMessageDots } from "react-icons/bi";
import { CgProfile, CgMoreO } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

const LeftScreen = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_pages}>
          <ul>
            <li>
              <a href="/">
                <AiFillHome className={styles.page_icon} />
                <div className={styles.text}>Home</div>
              </a>
            </li>
            <li>
              <a href="/">
                <MdOutlineExplore className={styles.page_icon} />
                <div className={styles.text}>Explore</div>
              </a>
            </li>
            <li>
              <a href="/">
                <IoIosNotifications className={styles.page_icon} />
                <div className={styles.text}>Notifications</div>
              </a>
            </li>
            <li>
              <a href="/">
                <BiMessageDots className={styles.page_icon} />
                <div className={styles.text}>Message</div>
              </a>
            </li>
            <li>
              <a href="/">
                <CgProfile className={styles.page_icon} />
                <div className={styles.text}>Profile</div>
              </a>
            </li>
            <li>
              <a href="/">
                <CgMoreO className={styles.page_icon} />
                <div className={styles.text}>More</div>
              </a>
            </li>
          </ul>
          <div className={styles.post_btn}>
            <a href="/">Post Now</a>
          </div>
          <div className={styles.logout}>
            <a href="/">
              <RiLogoutCircleRLine className={styles.logout_icon} />
              <div className={styles.text}>Logout</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftScreen;
