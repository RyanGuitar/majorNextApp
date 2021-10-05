import Link from "next/link";
import Head from "next/head";
import RainMaker from '../components/RainMaker'
import Buttons from "../components/Buttons";
import NavBar from '../components/NavBar'
import rainData from '../data/RainData'
import { useState } from "react";


const RainingSounds = () => {

  let [sounds, setSounds] = useState(rainData);
  //let s = 's r l'

  return (
    <>
      <Head>
        <title>Major Memory Trainer | Raining Sounds</title>
      </Head>
      <NavBar/>
      {/*<RainMaker sounds={sounds}/>*/}
      <RainMaker sounds={sounds.filter((sound) => sound.id !== 'r')}/>
      <Buttons/>
    </>
  );
};

export default RainingSounds;
