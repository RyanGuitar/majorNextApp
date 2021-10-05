import Link from 'next/link'
import Head from "next/head";

const Zero = () => {
  return (
    <>
    <Head>
        <title>Major Memory Trainer | Sound 0</title>
      </Head>
    <div className="container">
      <div className="content">
        <div className="heading">0 - Sound</div>
        <p className="text">
          When you see the number <b>0</b> think of the word <i>zero</i>. The
          sound <b>z</b> <sub>ero</sub> sounds like <b>s</b> <sub>o</sub>.
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

export default Zero;
