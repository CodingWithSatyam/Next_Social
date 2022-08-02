import React from "react";
import Link from "next/link";
import styles from "../styles/LeftScreen.module.css";
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
              <Link href="/">
                <a>
                  <AiFillHome className={styles.page_icon} />
                  <div className={styles.text}>Home</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <MdOutlineExplore className={styles.page_icon} />
                  <div className={styles.text}>Explore</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <IoIosNotifications className={styles.page_icon} />
                  <div className={styles.text}>Notifications</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <BiMessageDots className={styles.page_icon} />
                  <div className={styles.text}>Message</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <CgProfile className={styles.page_icon} />
                  <div className={styles.text}>Profile</div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <CgMoreO className={styles.page_icon} />
                  <div className={styles.text}>More</div>
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.post_btn}>
            <Link href="/">
              <a>Post Now</a>
            </Link>
          </div>
          <div className={styles.logout}>
            <Link href="/">
              <a>
                <RiLogoutCircleRLine className={styles.logout_icon} />
                <div className={styles.text}>Logout</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftScreen;
