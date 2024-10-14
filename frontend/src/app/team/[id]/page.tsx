'use client';
import styles from './newsId.module.scss';
import Image from 'next/image';
import Back from './../../../../public/icons/arrow-back.svg';
import Player from './../../../../public/images/Player.png';
import { useRouter } from 'next/navigation';

const NewsId = () => {
  const router = useRouter();
  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className={styles.teamId}>
      <div className={styles.headerContainer} onClick={handleBackClick}>
        <Image src={Back} alt='стрелка назад' />
        <p className={styles.textBack}>Вернуться ко всем новостям</p>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.conteinerWrap}>
          <div className={styles.conteinerName}>
            <p className={styles.subtitle}>Власов Виктор</p>
            <div className={styles.column}>
              <div>
                <p className={styles.text}>Родился</p>
                <p className={styles.text}>Возраст</p>
                <p className={styles.text}>Гражданство</p>
                <p className={styles.text}>Амплуа</p>
                <p className={styles.text}>Вес</p>
                <p className={styles.text}>Рост</p>
                <p className={styles.text}>Игр за “Кокос Group”</p>
                <p className={styles.text}>Пропущенных голов</p>
              </div>
              <div>
                <p className={styles.textUppercase}>15 марта 1823 года</p>
                <p className={styles.textUppercase}>30 лет</p>
                <p className={styles.textUppercase}>РОссия</p>
                <p className={styles.textUppercase}>Вратарь</p>
                <p className={styles.textUppercase}>79 кг</p>
                <p className={styles.textUppercase}>187 см</p>
                <p className={styles.textUppercase}>41</p>
                <p className={styles.textUppercase}>60</p>
              </div>
            </div>
          </div>
          <div className={styles.conteinerBiofrafy}></div>
        </div>
        <Image src={Player} alt='картинка команды' className={styles.image} />
      </div>
    </div>
  );
};

export default NewsId;
