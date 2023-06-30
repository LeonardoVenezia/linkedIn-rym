
import Image from 'next/image';
import SearchInput from '../SearchInput';
import styles from './Header.module.scss';
import Nav from '../Nav';

const buttons = [
  {
    src: '/icons/home.svg',
    text: 'Home',
  },
  {
    src: '/icons/web.svg',
    text: 'Mi red'
  },
  {
    src: '/icons/jobs.svg',
    text: 'Empleos'
  },
  {
    src: '/icons/messages.svg',
    text: 'Mensajes'
  },
  {
    src: '/icons/notification.svg',
    text: 'Notificaciones'
  },
  {
    src: '/animatedProfile.jpg',
    text: 'Notificaciones'
  }
]

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCont}>
        <div className={styles.searchContainer}>
          <Image
            src="/icons/logo.svg"
            width={41}
            height={41}
            alt="Linkedin logo"
          />
          <SearchInput />
        </div>
        <Nav buttons={buttons} />
      </div>
    </header>
  );
}

export default Header;
