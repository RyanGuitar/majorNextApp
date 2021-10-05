const Buttons = () => {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleClick = (e) => {
    console.log(e.target.textContent)
  } 

  return (
    <div id="buttonBox">
      {buttons.map((button) => (
        <button key={button} onClick={handleClick}>{button}</button>
      ))}
    </div>
  );
};

export default Buttons;
