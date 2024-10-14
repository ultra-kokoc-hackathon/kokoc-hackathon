'use client';
import styles from './team.module.scss';
import CardPlayer from './../../../public/images/CardPlayer.png';
import Link from 'next/link';
import Image from 'next/image';
import Filter from '@/components/Filter/Filter';

const MatchesPage = () => {
	const NEWS_DATA = Array.from({ length: 333 }, (_, index) => ({
    id: index + 1,
    src: CardPlayer,
  }));
  return (
    <div className={styles.matches}>
      <p className={styles.subtitle}>Состав футбольного клуба Кокос Group</p>
			<Filter />
      <div className={styles.teamsContainer}>
      {NEWS_DATA.map(({ id, src }) => (
          <Link key={id} href={`/team/${id}`}>
            <Image
              src={src}
              alt='Картинка команды'
              className={styles.teamImage}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;