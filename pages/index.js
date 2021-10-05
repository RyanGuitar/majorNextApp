import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return ( 
    <>
      <Head>
        <title>Major Memory Trainer</title>
      </Head>
      <main>
      <Link href={'Menu'}>
        <div className={styles.landing}> 
          <div className="heading">Major Memory System</div>
          <div className={styles.start}>click to start learning</div>
        </div>
      </Link>
      </main>
    </>
  )
}
