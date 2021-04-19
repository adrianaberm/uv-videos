import React, { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Text from '../components/core/Text/Text'
import UploadForm from '../components/Form/Form'
import VideoList from '../components/VideoList/VideoList'
import Player from '../components/Player/Player'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [selectedVideo, setSelectedVideo] = useState(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>UV Videos Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <section>
          <Text as="h1" className={styles.main__title}>Video Library</Text>
          <div className={styles.main__inner}>
            <div className={styles.main__col}>
              <Player selectedVideo={selectedVideo}></Player>
              <UploadForm formTitle="Upload your videos" placeholder="Add a video title"></UploadForm>
            </div>

            <div className={styles.main__col}>
              <VideoList setSelectedVideo={setSelectedVideo}></VideoList>
            </div>
          </div>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}
