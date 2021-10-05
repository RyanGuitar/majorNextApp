import Head from "next/head";
import Link from "next/link";

const Basics = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Basics</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">The Basics</div>
          <p className="text">
            The Major Memory System works by giving a digit a specific sound.
            These sounds are then combined with vowels to make up a word. The
            word will be something you can picture in your mind, like a person,
            or animal etc...
          </p>
          <p className="text2">
            It is these pictures that you will use to remember numbers.
          </p>
          <div className="navigation">
            <Link href={"Menu"}>
              <div className="back">back</div>
            </Link>
            <Link href={"Sounds1"}>
              <div className="next">next</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basics;
