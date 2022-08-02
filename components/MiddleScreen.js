import React from "react";
import Image from "next/image";
import styles from "../styles/MiddleScreen.module.css";
import { CgProfile } from "react-icons/cg";
import img from '../public/images/img.webp'
import img2 from '../public/images/img2.jpg'

const MiddleScreen = () => {
  return (
    <>
      <div className={styles.middle_container}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.profile}>
              <CgProfile className={styles.avatar} />
              <div className={styles.text}>Satyam Mishra</div>
            </div>
            <hr />
            <div className={styles.text}>
              <h3>Best Flower Image.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                laudantium?
              </p>
            </div>
            <Image
              src={img}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.profile}>
              <CgProfile className={styles.avatar} />
              <div className={styles.text}>Satyam Mishra</div>
            </div>
            <hr />
            <div className={styles.text}>
              <h3>Best Flower Image.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                laudantium?
              </p>
            </div>
            <Image
              src={img2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleScreen;
