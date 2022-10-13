import styled from "styled-components";

const DropDownContainer = styled.div`
    label {
        color: #ffffff;
        font-size: 19px;
        margin: 8px 0;
        opacity: .8;
    }
`;

const DropDownOption = styled.option`
    color: black;
    box-shadow: 0 0 10px 100px #1882a8 inset;
    // -webkit-appearance: none;
`;

const Select = styled.select`
    outline: 0;
    border: 0;
    padding: 8px;
    font-size: 17px;
    color: #ffffff;
    border-radius: 3px;
    background: rgb(255, 255, 255,.15);
    border: 2px solid #cf9a2e;

    width: 350px;
    height: 42px;
`;

const BaseDropDown = (props) => {
    return (
        <DropDownContainer>
            <label htmlFor={props.id}>{props.label}</label><br></br>
            <Select id={props.id} onChange={props.onChange} name={props.name} defaultValue={props.value} required>
                {props.options.map((option) => (<DropDownOption key={option+props.id} value={option}>{option}</DropDownOption>))}     
            </Select>
        </DropDownContainer>
    );
}

export default BaseDropDown;