import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/ImageSearch.module.css";

//const { useState, useEffect } = React

const ImageSearch = (props) => {
  let buttons = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let numbers = [
    ["0", "ball"],
    ["1", "tie"],
    ["2", "noah"],
    ["3", "me"],
    ["4", "rye"],
    ["5", "lee"],
    ["6", "chew"],
    ["7", "cow"],
    ["8", "ivy"],
    ["9", "bee"],
    ["10", "dice"],
    ["11", "tot"],
    ["12", "tin"],
    ['13','time'],
    ['14', 'tyre'],
    ['15', 'doll'],
    ['16','dish'],
    ['17', 'dog'],
    ['18','dive'],
    ['19','tub'],
    ['20','noose'],
    ['21','net'],
    ['22','nun'],
    ['23','nam'],
    ['24','nerd'],
    ['25','nail'],
    ['26','nosh'],
    ['27','nick'],
    ['28','knife'],
    ['29', 'nob'],
    ['30','moose'],
    ['31','mat'],
    ['32','moon'],
    ['33','mummy'],
    ['34','mower'],
  ];

  let copyNumbers = [...numbers];
  //const [text, setText] = useState('');
  const [search, setSearch] = useState([...copyNumbers]);
  const [input, setInput] = useState("");
  //  const [add, setAdd] = useState()
  //  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  //   let copyNumbers = [...numbers]
  useEffect(() => {
    if (input.length < 3) {
      setSearch(numbers.filter((number) => number[0].includes(input)));
    } else {
      setSearch(numbers);
    }
  }, [input]);

  const searchList = (e) => {
    if (input.length < 2) {
      setInput(input + e.target.id);
    } else {
      setInput("");
    }
    // setText(e.target.value)
    //copyNumbers = numbers.filter(number => number == e.target.value)
  };

  return (
    <div className="SearchContainer">
      <Head>
        <title>Major Memory Trainer | Image Search</title>
      </Head>
      <div id="SearchInputContainer">
        <Link href={"Menu"}>
          <span id="x">x</span>
        </Link>
        <input type="text" value={input} onChange={searchList} />
      </div>

      {search.map((number) => {
        return (
          <div id="SearchImageContainer" key={number[0] + "contain"}>
            <div key={number[0] + "div"}>
              <div key={number[0] + "p"}>
                {number[0]} {number[1]}
              </div>
              <Image
                src={"/images/" + number[1] + ".webp"}
                key={number[0] + "img"}
                alt={number[1] + " " + number[0]}
                width={200}
                height={200}
              />
            </div>
          </div>
        );
      })}

      <div id="buttonBox">
        {buttons.map((button) => {
          return (
            <button key={button + "btn"} id={button} onClick={searchList}>
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

//const rootElement = document.getElementById('root')
//ReactDOM.render(<App />, rootElement)

/*
 {search.map(number => {
          return  <p key={number}>{number}</p>
        })}
*/
/*                                                                           */

export default ImageSearch;
