import {useState, useEffect} from 'react'

const buttons = [0,1,2,3,4,5,6,7,8,9];
  
  const gameImages = [
    {
      num:'0',
      name:'ball',
      group:'0',
    },
    {
      num:'1',
      name:'tie',
      group:'0',
    },
    {
      num:'2',
      name:'noah',
      group:'0',
    },
    {
      num:'3',
      name:'me',
      group:'0',
    },
    {
      num:'4',
      name:'rye',
      group:'0',
    },
    {
      num:'5',
      name:'lee',
      group:'1',
    },
    {
      num:'6',
      name:'chew',
      group:'1',
    },
    {
      num:'7',
      name:'cow',
      group:'1',
    },
    {
      num:'8',
      name:'ivy',
      group:'1',
    },
    {
      num:'9',
      name:'bee',
      group:'1',
    },
    {
      num:'10',
      name:'dice',
      group:'2',
    },
    {
      num:'11',
      name:'tot',
      group:'2',
    },
    {
      num:'12',
      name:'tin',
      group:'2',
    },
    {
      num:'13',
      name:'time',
      group:'2',
    },
    {
      num:'14',
      name:'tyre',
      group:'2',
    },
    {
      num:'15',
      name:'doll',
      group:'3',
    },
    {
      num:'16',
      name:'dish',
      group:'3',
    },
    {
      num:'17',
      name:'dog',
      group:'3',
    },
    {
      num:'18',
      name:'dive',
      group:'3',
    },
    {
      num:'19',
      name:'tub',
      group:'3',
    },
  ];

const MajorMemory = (props) => { 
  
  const shuffle = (array) => {
    return array.sort(() => Math.random()-0.5 )
  }
  
  const [images, setImages] = useState([...gameImages]);
  const [group, setGroup] = useState('0');
  const [filteredGroup, setFilteredGroup] = useState(images.filter((image) => image.group == group))
  const [copyFilterGroup, setCopyFilterGroup] = useState(shuffle([...filteredGroup]))
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState()
  const [textBox, setTextBox] = useState()

  useEffect(() => {
    setTextBox(document.getElementById('GameMessage'))
  }, []);
  
  useEffect(() => {
    setCount(0)
    setFilteredGroup(gameImages.filter((image) => image.group == group));
  }, [group]);
   
  useEffect(() => {
    setCopyFilterGroup(shuffle([...filteredGroup]));
  }, [filteredGroup]);
  
  const checkSame = (e) => {
    if(count < copyFilterGroup.length - 1){
      if(e.target.id == copyFilterGroup[count].num){
        setMessage();
        e.target.classList.add('fade');
        setCount(count + 1);
      } else {
        textBox.classList.add('flexing')
        setTimeout(() => textBox.classList.remove('flexing'), 1000);
        setMessage('Wrong');
      }
    } else {

      if(group < gameImages[gameImages.length - 1].group){
        setGroup(Number(group) + 1)
      } else {
        setGroup(0)
      }
    }
  }
  
  const navigate = (direction) => {
   // (direction == 'next')? setGroup(Number(group) + 1) : setGroup(Number(group) - 1)
    if(direction == 'next'){
      if(group < gameImages[gameImages.length - 1].group){
        setGroup(Number(group) + 1)
      } else {
        setGroup(0)
      }
    }
    if(direction == 'back'){
      if(group > 0){
        setGroup(Number(group) - 1)
      } else {
        setGroup(gameImages[gameImages.length - 1].group)
      }
    }
  }
  
  return (
    <div id="GameContainer">
      <div id="GameHeader">
        <div><span>{copyFilterGroup[count].num}</span><span id="GameX">X</span></div>
       </div>
      
      <div id="GameImages">
        <div className="hide" id="GameMessage"><div>Wrong</div></div>
     
        {filteredGroup.map((image) => {
            return (
              <div id="GameImageBox" key={image.num}>
                <img src={image.name + '.webp'} alt={image.name} key={image.name +'images'} id={image.num} onClick={checkSame}/>
              </div>
            );
          })}
      </div>
      <div id="GameButtonBox">
        <button onClick={() => navigate('back')}>Back</button>
        <button onClick={() => navigate('next')} id="GameNext">Next</button>
      </div>
    </div>
  );
}
 
export default MajorMemory;