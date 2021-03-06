import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ list }) {
  return (
    <div className="container">
      <Head>
        <title>AAAAACreate Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {list.map(item => (
          <p> {item.holders} </p>
        ))}
        ,
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer />


export async function getServerSideProps() {
  const res = await fetch(
    'https://simplescraper.io/api/TNFvHIlSgFEfyvEe8lgr?apikey=YXlGPXVMMlf0XKUtbrE0MCSbche8Ytku&limit=100'
  );
  const json = await res.json();

  return {
    props: {
      list: json.data
    }
  };
}
