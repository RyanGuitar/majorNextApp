import Link from "next/link";
import Head from "next/head";

const Sounds2 = () => {
  return (
    <>
    <Head>
        <title>Major Memory Trainer | Sounds 5 - 9</title>
      </Head>
      <div className="container">
        <div className="content">
          <div className="heading">Sounds 5 - 6</div>
          <p className="text">
            We will now do the last 5 numbers 5 - 9. And then we can get to the
            fun part - learning the images!
          </p>

          <table id="table">
            <thead>
              <tr>
                <th className="shortHead">Digits</th>
                <th colSpan="3">Sounds</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Link href="5">
                  <td className="number">5</td>
                </Link>
                <td colSpan="3">
                  <b>l</b> <sub>ow</sub>
                </td>
              </tr>
              <tr>
                <Link href="6">
                  <td className="number">6</td>
                </Link>
                <td className="twenty-three">
                  <b>j</b> <sub>ump</sub>
                </td>
                <td className="twenty-three">
                  <b>ch</b> <sub>urch</sub>
                </td>
                <td className="twenty-three">
                  <b>sh</b> <sub>e</sub>
                </td>
              </tr>
              <tr>
                <Link href="7">
                  <td className="number">7</td>
                </Link>
                <td>
                  <b>k</b> <sub>ick</sub>
                </td>
                <td colSpan="2">
                  <b>g</b> <sub>ood</sub>
                </td>
              </tr>
              <tr>
                <Link href="8">
                  <td className="number">8</td>
                </Link>
                <td>
                  <b>f</b> <sub>ee</sub>
                </td>
                <td colSpan="2">
                  <b>v</b> <sub>ictor</sub>
                </td>
              </tr>
              <tr>
                <Link href="9">
                  <td className="number">9</td>
                </Link>
                <td>
                  <b>p</b> <sub>ut</sub>
                </td>
                <td colSpan="2">
                  <b>b</b> <sub>ook</sub>
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

export default Sounds2;
