import Link from "next/link";
import Head from "next/head";

const Eight = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sound 8</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">8 - Sound</div>
          <p className="text">
            The number <b>8</b> is like our cursive friend number 6. Notice how
            the number looks like a cursive <b>f</b>. The sounds are <b>f</b>{" "}
            <sub>ee</sub> and <b>v</b> <sub>ictor</sub>.
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

export default Eight;
