import styled from "styled-components";
// import './BaseInput.css';

const InputContainer = styled.div`
  label {
    color: #ffffff;
    font-size: 19px;
    margin: 8px 0;
    opacity: .8;
  }
  input {
    outline: 0;
    border: 0;
    padding: 8px;
    font-size: 17px;
    color: #ffffff;
    border-radius: 3px;
    background: rgb(255, 255, 255,.15);
    width: 350px;
    height: 42px;
  }
  input[type="text"], input[type="number"], input[type="email"], input[type="password"] {
    background: transparent;
    border-bottom: 2px solid #cf9a2e;

    background-image: url(${props => props.url});
    background-size: 24px 24px;
    display: inline-block;
    background-repeat: no-repeat;
    background-position: 320px 0;
    vertical-align: middle;
  }
`;

const BaseInput = (props) => {
  return (
    <InputContainer className="input__container" url={props.icon} color='blue'>
      {/* <input id={props.id} type={props.type} className="form-control" placeholder={props.placeholder} name={props.name} defaultValue={props.value} required /> */}
      <label htmlFor={props.id}>{props.label}</label><br></br>
      <span><input type={props.type} name={props.name} id={props.id} defaultValue={props.value} placeholder={props.placeholder} maxLength={props.maxLength} required /></span>
    </InputContainer>
  );
};

export default BaseInput;
