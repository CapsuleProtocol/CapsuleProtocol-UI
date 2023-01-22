import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {bgwrap1} from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Capsule Protocol</title>
        <meta name="description" content="Access equity in your alt and microcap bags at low rates and earn rewards.
" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div  className={styles.description}>


        </div>


        <img src = "capsule.gif"></img>
      
        <h2> Capsule Protocol Landing Soon.</h2>
       <b> Sign up for early access below </b>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScLeuTbyC_21mVr0DhrBTq07u9c0AshMoOni_JbB8YQ688cvw/viewform?embedded=true" width="640" height="1106" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </main>
    </>
  )
}
