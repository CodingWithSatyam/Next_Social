import React from "react";
import Link from "next/link";
import styles from "../styles/RightScreen.module.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";

const RightScreen = () => {
  return (
    <>
      <div className={styles.right_container}>
        <Link href={"/"}>
          <a>
            <div className={styles.profile}>
              <CgProfile className={styles.avatar} />
              <div className={styles.text}>Satyam Mishra</div>
            </div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <div className={styles.create}>
              <AiOutlinePlus className={styles.plus} />
              <div className={styles.create_text}>Create</div>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default RightScreen;
