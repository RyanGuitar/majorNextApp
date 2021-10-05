import Link from "next/link";
import Head from "next/head";

const Four = () => {
  return (
    <>
    <Head>
        <title>Major Memory Trainer | Sound 4</title>
      </Head>
    <div className="container">
      <div className="content">
        <div className="heading">4 - Sound</div>
        <p className="text">When you think of the number <b>4</b> then think of the word <i>four</i>.
            The fourth letter of the word <i>four</i> is <b>r</b>.
            The sound is <b>r</b>{" "}<sub>ow</sub>.</p>
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

export default Four;
