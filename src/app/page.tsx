'use client'
import styles from './page.module.scss'
import SideUser from './comonents/SideUser'
import Publications from './comonents/Publications'
import { ApolloProvider } from '@apollo/client';
import { client } from './services/feedServices';
import SideAds from './comonents/SideAds'

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <SideUser />
      <ApolloProvider client={client}>
        <Publications />
      </ApolloProvider>
      <SideAds />
    </main>
  )
}

export default Home;
