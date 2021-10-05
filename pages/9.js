import Link from "next/link";
import Head from "next/head";

const Nine = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 9</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">9 - Sound</div>
          <p className="text">
            The number <b>9</b> when viewed in a mirror looks like the letter{" "}
            <b>p</b>. The sounds are <b>p</b> <sub>ut</sub> and it sounds like{" "}
            <b>b</b> <sub>ook</sub>.
          </p>
          <p className="text2">
            Well done! That is all the sounds we will need.
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

export default Nine;
