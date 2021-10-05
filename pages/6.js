import Link from "next/link";
import Head from "next/head";

const Six = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 6</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">6 - Sound</div>
          <p className="text">
            For the number <b>6</b> we need to get a little more creative. If
            you look at the number in a mirror it looks a little like a cursive{" "}
            <b>j</b>. The sounds are <b>j</b> <sub>ump</sub> and it sounds like{" "}
            <b>ch</b> <sub>urch</sub> and <b>sh</b> <sub>e</sub>.
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

export default Six;
