import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <title>buildforgood.co</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
        rel="stylesheet"
        type="text/css"
      ></link>
    </Head>

    <main>
      <h1 className="title">buildforgood.co</h1>
      <h2 className="description">
        For humanity, our planet, and our animal friends.
      </h2>
    </main>

    <style jsx>{`
      .container {
        min-height: 100vh;
        background: #5bd75f;
        color: #ffffff;
      }

      main {
        padding: 17rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      a {
        text-decoration: none;
      }

      .title {
        font-size: 3.25rem;
        margin-bottom: 0.1rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        font-weight: normal;
        opacity: 0.7;
      }

      .btn {
        display: inline-block;
        margin-bottom: 1rem;
        color: rgba(255, 255, 255, 0.7);
        background-color: rgba(255, 255, 255, 0.08);
        border-color: rgba(255, 255, 255, 0.2);
        border-style: solid;
        border-width: 1px;
        border-radius: 0.3rem;
        padding: 0.75rem 1rem;
        transition: color 0.2s, background-color 0.2s, border-color 0.2s;
      }

      @media only screen and (max-width: 42rem) {
        .title {
          font-size: 2rem;
        }

        .description {
          font-size: 1.25rem;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home;
