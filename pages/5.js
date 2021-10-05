import Link from "next/link";
import Head from "next/head";

const Five = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 5</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">5 - Sound</div>
          <p className="text">
            For the number <b>5</b> look at the back of your left hand (five
            fingers). Now hold your fingers together and stretch out your thumb.
            See how it forms a <b>L</b>-shape? The sound for <b>5</b> is{" "}
            <b>l</b> <sub>ow</sub>.
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

export default Five;
