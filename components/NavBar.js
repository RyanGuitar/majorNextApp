import Link from 'next/link'

const NavBar = () => {
  return (
    <div id="score">
      <span id="newScore">0</span>
      <Link href={"Menu"}>
        <span id="x">x</span>
      </Link>
    </div>
  );
};

export default NavBar;
