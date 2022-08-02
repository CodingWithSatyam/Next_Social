import React from "react";
import styles from '../styles/BottomBar.module.css';
import { AiOutlineHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import { CgProfile, CgMoreO } from "react-icons/cg";

const BottomBar = () => {
  return (
    <>
      <div className={styles.bottom_bar}>
        <div className={styles.icons}>
            <AiOutlineHome className={styles.icon} />
            <MdExplore className={styles.icon} />
            <IoIosNotifications className={styles.icon} />
            <AiOutlinePlus className={styles.plus}  />
            <RiMessage2Fill className={styles.icon} />
            <CgProfile className={styles.icon} />
            <CgMoreO className={styles.icon} />
        </div>
      </div>
    </>
  );
};

export default BottomBar;
