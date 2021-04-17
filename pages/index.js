import Head from 'next/head'
import useSwr from 'swr'
import Link from 'next/link'
import Text from '../components/core/Text/Text'
import Header from '../components/core/Header/Header'
import Footer from '../components/core/Footer/Footer'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSwr('../api/videos', fetcher)

  if (error) return <div>Failed to load videos</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <section className={styles.main__inner}>
          <ul>
            {data.map(({ name, id }) => (
              <li key={id}>
                <Link href="/video/[id]" as={`/video/${id}`}>
                  <Text as="a">{`${name}`}</Text>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer/>
    </div>
  )
}
