import styled from "styled-components";
import React,{useState} from 'react'
const ProfileButtonStyled = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    button {
        background-color: #ffb521;
        padding: 8px 17px;
        font-size: 16px;
    }   
`;
const ProfileButton = (props) => {
    const [bgColour, setBgColour] = useState("#ffb521");
    const [Colour, setColour] = useState("#ffb521");
    return (
        <ProfileButtonStyled>
            {props.customStyle===undefined?(
                <button onClick={props.onClick}  onMouseEnter={()=>{setBgColour('#ffffff');setColour('black')}} onMouseLeave={()=>{setBgColour('#000');setColour('white')}} className="btn btn-outline-primary" style={{backgroundColor: bgColour,color:Colour}}>{props.children}</button>
            ):(
                <button onClick={props.onClick} className={"btn btn-outline-primary "+props.customStyle} >{props.children}</button>
            )}
            
        </ProfileButtonStyled>
    );
}

export default ProfileButton;