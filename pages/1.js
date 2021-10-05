import Link from "next/link";
import Head from "next/head";

const One = () => {
  return (
    <>
     <Head>
        <title>Major Memory Trainer | Sound 1</title>
      </Head>
    <div className="container">
      <div className="content">
        <div className="heading">1 - Sound</div>
        <p className="text">
          The number <b>1</b> has a single downward stroke like the letter{" "}
          <b>T</b>. The sound is <b>t</b> <sub>o</sub> and it sounds like{" "}
          <b>d</b> <sub>o</sub>.
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

export default One;
