import Head from "next/head";
import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Introduction</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">Introduction</div>
          <p className="text">
            The Major Memory System is a memory technique used to remember
            numbers and ordered lists. The same techniques can be used to teach
            you how to remember anything.
          </p>
          <div className="navigation">
            <Link href={"Menu"}>
              <div className="back">back</div>
            </Link>
            <Link href={'Basics'}>
                <div className="next">next</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
