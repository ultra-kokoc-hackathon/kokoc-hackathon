'use client';
import Image from 'next/image';
import styles from './news.module.scss';
import SoccerMan from './../../../public/mans.png';
import { useState } from 'react';

const NewsPage = () => {
	const [visibleCount, setVisibleCount] = useState(6);
  const NEWS_DATA = Array(333).fill(SoccerMan);
	const handleShowMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, NEWS_DATA.length));
  };
  return (
    <div className={styles.news}>
      <h2 className={styles.subtitle}>Новости</h2>
      <div className={styles.subtitleContainer}>
        <p className={styles.text}>#кокос групп</p>
        <p className={styles.text}>#дайджест</p>
        <p className={styles.text}>#пресс-релизы</p>
      </div>
			<div className={styles.newsContainer}>
        {NEWS_DATA.slice(0, visibleCount).map((imageSrc, index) => (
          <Image
            key={index}
            src={imageSrc}
            alt='Картинка банера'
            className={styles.mansImage}
          />
        ))}
      </div>
      {visibleCount < NEWS_DATA.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.button} onClick={handleShowMore}>
            Показать еще
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsPage;
