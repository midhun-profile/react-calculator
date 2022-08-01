// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './button';

import Row from './row';
import Display from './display';


function App() {
//usestate a is for controlling value
//usestate s for on/off function through style
  const [a,setA]=React.useState("")
  const [s,setS]=React.useState(false)

  const style={
    display: s ? "block" : "none"
  }

  function value(c){
    var k=a
    if(a==="Infinity" || a==="syntax error"){k="";}
  //   console.log(k);  // console.log(a+c)
  setA(k+c)
  }

   function calc(){
    try{
      setA(String(parseFloat(eval(a).toFixed(3))))
    }
    catch(exception){setA("syntax error")}
     }
  
function clearit(){
  setA("")
}

function backspace(){
  var k=a
  if(a==="Infinity" || a==="syntax error"){k=""; }
  else{k=a.slice(0, -1);}
  setA(k)
}

function onoff(){
  setA("")
  if(s===false){setS(true)}
  else{setS(false)}
}


  return (
    <div>
   
       <div id="main">

         <Display style={style} a={a} />
         
        <center>
        <br/>

        <div className="flux-container">
        <button onClick={onoff}>on/off</button>
        <button onClick={clearit}>clear</button>
        <button onClick={backspace}>delete</button>
        </div>
      
        <Row c={["9","8","7","/"]} value={value} />
      
        <Row c={["6","5","4","*"]} value={value} />
       
        <Row c={["3","2","1","+"]} value={value} />
     
            <div className="flux-container">
                <button style={{fontSize:"25px"}} onClick={()=>{let c=".";value(c);}}>.</button>
                <Button c={"0"} value={value} />
                <button  onClick={calc}>=</button>
                <Button c={"-"} value={value} />
            </div>

        </center>   
        
    </div>
   
    </div>
  );
}

export default App;
