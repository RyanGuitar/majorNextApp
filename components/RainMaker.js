

const RainMaker = ({sounds}) => {
  
  return (
    <div id="sounds">
      {sounds.map((sound) => (
        <div key={sound.id} id={sound.num}>
          {sound.id}
        </div>
      ))}
    </div>
  );
};

export default RainMaker;
