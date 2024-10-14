'use client';
import Image from 'next/image';
import styles from './news.module.scss';
import SoccerMan from './../../../public/mans.png';
import { useState } from 'react';
import Link from 'next/link';

const NewsPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const NEWS_DATA = Array.from({ length: 333 }, (_, index) => ({
    id: index + 1,
    src: SoccerMan,
  }));
  const handleShowMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, NEWS_DATA.length));
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
      {NEWS_DATA.slice(0, visibleCount).map(({ id, src }) => (
          <Link key={id} href={`/news/${id}`}>
            <Image
              src={src}
              alt='Картинка банера'
              className={styles.mansImage}
            />
          </Link>
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
