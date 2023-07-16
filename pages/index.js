import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <>
      <Layout>
        <section className={utilStyles.headingMd}>
          <p>
            私はWebエンジニアです/メディア系サイトの開発をしています/好きな言語はRubyです
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/">
                <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2020
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/">
                <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2020
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/">
                <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2020
              </small>
            </article>
            <article>
              <Link href="/">
                <img src="/images/thumbnail01.jpg"
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href="/">
                <a className={utilStyles.boldText}>SSGとSSRの使い分けの場面はいつなのか？</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                February 23, 2020
              </small>
            </article>
          </div>
        </section>
      </Layout>
    </>
  )
}
