import Head from 'next/head'
import useSwr from 'swr'
import Header from '../components/core/Header/Header'
import Footer from '../components/core/Footer/Footer'
import UploadForm from '../components/core/Form/Form'
import VideoList from '../components/core/VideoList/VideoList'
import Player from '../components/core/Player/Player'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSwr('../api/videos', fetcher)

  if (error) return <div>Failed to load videos</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>UV Videos Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <section className={styles.main__inner}>
          <div className={styles.main__col}>
            <Player></Player>
            <UploadForm formTitle="Upload your videos" placeholder="Add a video title"></UploadForm>
          </div>

          <div className={styles.main__col}>
            <VideoList data={data}></VideoList>
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}
