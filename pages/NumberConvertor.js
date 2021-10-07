import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const TransformData = [
  ["00", "ball"],
  ["01", "tie"],
  ["02", "noah"],
  ["03", "me"],
  ["04", "rye"],
  ["05", "lee"],
  ["06", "chew"],
  ["07", "cow"],
  ["08", "ivy"],
  ["09", "bee"],
  ["10", "dice"],
];

const NumberConvertor = () => {
  let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [number, setNumber] = useState("Enter 10 digits");
  const [first, setFirst] = useState(true);
  const [transformed, setTransformed] = useState([]);

  useEffect(() => {
    if (number == "") {
      setTransformed([]);
    }
    if (!transformed.length) {
      if (number.length % 2 == 0 && number.length) {
        setTransformed(
          TransformData.filter(
            (data) => data[0] == number.slice(number.length - 2)
          )
        );
      }
    } else {
      if (number.length && number.length % 2 == 0) {
        setTransformed([
          ...transformed,
          ...TransformData.filter(
            (data) => data[0] == number.slice(number.length - 2)
          ),
        ]);
      }
    }
  }, [number]);

  const showNumber = (e) => {
    if (first) {
      setNumber(e.target.id);
      setFirst(false);
    } else {
      if (number.length < 10) {
        setNumber(number + e.target.id);
      } else {
        setNumber("");
        setFirst(true);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Number Convertor</title>
      </Head>
      <div id="NumberTransformerContainer">
        <div id="TransformerHeaderBox">
          Number Transformer
          <Link href={"Menu"}>
            <span id="TransformX">X</span>
          </Link>
        </div>

        <div id="TransformBox">
          <div id="TransformBoxImage">
            {transformed.map((transform, index) => {
              return (
                <Image
                  src={"/images/" + transform[1] + ".webp"}
                  key={index}
                  alt={transform[1]}
                  width={200}
                  height={200}
                />
              );
            })}
          </div>
          <div id="TransformBoxNumber">
            <div id="TransformNumber">
              <span>{number}</span>
            </div>
          </div>
        </div>
        <div id="TransformButtonBox">
          {buttons.map((button) => {
            return (
              <button onClick={showNumber} key={button + "btn"} id={button}>
                {button}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NumberConvertor;
