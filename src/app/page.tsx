'use client'
import styles from './page.module.scss'
import SideUser from './comonents/SideUser'
import Publications from './comonents/Publications'
import { ApolloProvider } from '@apollo/client';
import { client } from './services/feedServices';
import SideAds from './comonents/SideAds';
import { GET_CHARACTERS } from './services/feedServices';

const getData = async () => {
  const { data } = await client.query({
    query: GET_CHARACTERS,
    variables: { page: 1 },
  });
  return data;
}

const Home: React.FC = async () => {
  const data = await getData()

  return (
    <main className={styles.main}>
      <SideUser />
      <ApolloProvider client={client}>
        <Publications initialData={data} />
      </ApolloProvider>
      <SideAds />
    </main>
  )
}

export default Home;
