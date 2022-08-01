import './App.css';
import Button from './button';

function Row(props) {
  return (
    <div  className="flux-container">
    <Button c={props.c[0]} value={props.value} />
    <Button c={props.c[1]} value={props.value} />
    <Button c={props.c[2]} value={props.value} />
    <Button c={props.c[3]} value={props.value} />
    </div>
  );
}

export default Row;
