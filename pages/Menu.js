import Link from "next/link";
import Head from "next/head";

const Menu = () => {
  return (
    <>
      <Head>
        <title>Major Memory Trainer | Menu</title>
      </Head>
      <div className="menu">
        <div className="heading">Main Menu</div>
        <Link href={"Introduction"}>
          <div className="MenuLinks">Introduction</div>
        </Link>
        <Link href={"Basics"}>
          <div className="MenuLinks">The Basics</div>
        </Link>
        <Link href={'Sounds1'}><div className="MenuLinks">Sounds 0 - 4</div></Link>
        <Link href={'Sounds2'}><div className="MenuLinks">Sounds 5 - 9</div></Link>
        <Link href={'RainingSounds'}><div className="MenuLinks">Raining Sounds</div></Link>
        <Link href={'NumberConvertor'}><div className="MenuLinks">Number Convertor</div></Link>
        <Link href={'ImageSearch'}><div className="MenuLinks">Image Search</div></Link>
        <Link href={'MajorMemory'}><div className="MenuLinks">Major Memory</div></Link>
      </div>
    </>
  );
};

export default Menu;
