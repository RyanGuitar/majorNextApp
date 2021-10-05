import Link from "next/link";
import Head from "next/head";

const Sounds1 = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Sounds 0 - 4</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">Sounds 0 - 4</div>
          <p className="text">
            We will start with the first 5 sounds: 0 - 4. The important thing to
            note here is that we are working with the sounds of words and not
            the spelling. So the sound will be given like <b>z</b>{" "}
            <sub>ero</sub> which means the z-sound in the word zero.
          </p>

          <table id="table">
            <thead>
              <tr>
                <th className="shortHead">Digits</th>
                <th colSpan="2">Sounds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Link href="0">
                  <td className="number">0</td>
                </Link>
                <td className="thirty-five">
                  <b>s</b> <sub>o</sub>
                </td>
                <td className="thirty-five">
                  <b>z</b> <sub>ero</sub>
                </td>
              </tr>
              <tr>
                <Link href="1">
                  <td className="number">1</td>
                </Link>
                <td>
                  <b>t</b> <sub>o</sub>
                </td>
                <td>
                  <b>d</b> <sub>o</sub>
                </td>
              </tr>
              <tr>
                <Link href="2">
                  <td className="number">2</td>
                </Link>
                <td colSpan="2">
                  <b>n</b> <sub>o</sub>
                </td>
              </tr>
              <tr>
                <Link href="3">
                  <td className="number">3</td>
                </Link>
                <td colSpan="2">
                  <b>m</b> <sub>e</sub>
                </td>
              </tr>
              <tr>
                <Link href="4">
                  <td className="number">4</td>
                </Link>
                <td colSpan="2">
                  <b>r</b> <sub>ow</sub>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="hint">Click on a number for more information</p>
          <div className="navigation">
            <Link href={"Menu"}>
              <div className="back">back</div>
            </Link>
            <Link href={"Sounds2"}>
              <div className="next">next</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sounds1;
