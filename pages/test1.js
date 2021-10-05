

const Test = (context) => {

    let numbers = [1,2,3,4,5,6,7,8,9]
  
    return ( 
        
      <div>
          <div className="test">Test Site</div>
          <p key={context.word}>{context.word}</p>
          {numbers.map(number => <p key={number.toString()}>{number}</p>)}
          <style jsx>{`
          div {
              height:100vh;
              display:flex;
              align-items:center;
              justify-content:center;
              flex-direction:column;
          }
            p {
              font-size:2rem;
              color:red;
           }
          `}</style>
      </div>
        
    );
}
 
export default Test;