import Link from "next/link";
import Head from "next/head";

const Three = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 3</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">3 - Sound</div>
          <p className="text">
            The number <b>3</b> turned on its side looks likes the letter{" "}
            <b>m</b>. The sound is <b>m</b> <sub>e</sub>.
          </p>
          <div className="navigation">
            <Link href={"Sounds1"}>
              <div className="back">back</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Three;
