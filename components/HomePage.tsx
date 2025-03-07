import React from "react";
import styles from "./homepage.module.css";
import Link from "next/link";

const HomePage = () => {
  const cardData = [
    {
      title: "HTML",
      img: "https://img.icons8.com/color/200/html-5.png",
      alt: "html",
      link: "/HTML/tutorials",
    },
    {
      title: "CSS",
      img: "https://img.icons8.com/fluent/512/css3.png",
      alt: "css",
      link: "/CSS/tutorials",
    },
    {
      title: "Javascript",
      img: "https://img.icons8.com/color/512/javascript.png",
      alt: "JAVASCRIPT",
      link: "/JAVASCRIPT/tutorials",
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {cardData &&
        cardData.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardBg}></div>
            <h2>{card.title}</h2>
            <img src={card.img} alt={card.alt} />
            <Link href={card.link} className={styles.button}>
              See more
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HomePage;
