import Link from "next/link";
import Head from "next/head";

const Seven = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 7</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">7 - Sound</div>
          <p className="text">
            For the number <b>7</b> we will need to rely on our creativity once
            more. If you look at the letter <b>k</b> see how it is made up of
            two <b>7</b>s? Can you see it? The sounds are <b>k</b>{" "}
            <sub>ick</sub> and <b>g</b> <sub>ood</sub>.
          </p>
          <div className="navigation">
            <Link href={"Sounds2"}>
              <div className="back">back</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seven;
