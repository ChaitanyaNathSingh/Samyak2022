import './BaseInput.css';
const BaseInput = (props) => {
  return (
    <div className="input__container">
      <input id={props.id} type={props.type} className="form-control" placeholder={props.placeholder} name={props.name} defaultValue={props.value} required />
    </div>
  );
};

export default BaseInput;
