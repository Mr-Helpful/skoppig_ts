import Head from 'next/head'
import Image from 'next/image'
import { BrushMenu } from '../src/brush/BrushMenu'
import styles from '../styles/Home.module.css'
import { BigStack } from '../src/BigStack'
import { BrushTree } from '../src/brush/BrushTree'
import { BrushDiagram } from '../src/nodes/BrushDiagram'

export default function Home() {
  return (<div className={styles.container}>
    <Head>
      <title>Skoppig</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <BrushDiagram />

    <main
      className={styles.main}
    >
      <h1
        className={styles.title}
      >
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <BrushMenu onChange={state => console.log(state)} />

      {/* <BigStack>
        <text style={{ backgroundColor: 'red' }}>{"I'm stacked!"}</text>
      </BigStack> */}
    </main>

    <footer
      className={styles.footer}
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span
          className={styles.logo}
        >
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  </div>)
}
