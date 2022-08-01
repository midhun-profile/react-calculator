// import logo from './logo.svg';
import './App.css';


function Button(props) {


    function call(){props.value(props.c)}
  return (
    <button  onClick={call}>
   
      {props.c}
   
    </button>
  );
}

export default Button;
