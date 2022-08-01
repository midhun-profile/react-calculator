// import logo from './logo.svg';
import './App.css';


function Display(props) {

  return (
    <center> <div id="display">
       <p style={props.style} >{props.a}</p>
       </div>
        </center>
  );
}

export default Display;
