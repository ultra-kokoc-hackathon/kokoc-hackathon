"use client";
import styles from './newsId.module.scss';
import Image from 'next/image';
import Back from './../../../../public/icons/arrow-back.svg';
import Card from './../../../../public/images/Card.png';
import { useRouter } from 'next/navigation';

const NewsId = () => {

  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.newsId}>
      <div className={styles.flex}>
        <div className={styles.wrapper}>
          <div className={styles.headerContainer} onClick={handleBackClick}>
            <Image src={Back} alt='стрелка назад' />
            <p className={styles.textBack}>Вернуться ко всем новостям</p>
          </div>
          <p className={styles.subtitle}>Заголовок новости</p>
          <div className={styles.subtitleContainer}>
            <p className={styles.text}>#кокос групп</p>
            <p className={styles.text}>#дайджест</p>
            <p className={styles.text}>#пресс-релизы</p>
          </div>
          <p className={styles.lorem}>
            Текст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новостиТекст новостиТекст новостиТекст новостиТекст
            новостиТекст новости
          </p>
        </div>
        <Image src={Card} alt='картинка команды' className={styles.image} />
      </div>
    </div>
  );
};

export default NewsId;
