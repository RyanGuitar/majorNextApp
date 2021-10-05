import Link from "next/link";
import Head from "next/head";

const Two = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 2</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">2 - Sound</div>
          <p className="text">
            The number <b>2</b> has a two downward strokes like the letter{" "}
            <b>n</b>. The sound is <b>n</b> <sub>o</sub>.
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

export default Two;
