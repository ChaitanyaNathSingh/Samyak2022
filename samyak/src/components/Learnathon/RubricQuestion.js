import styled from "styled-components";

const Question = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 85vw;
    width: 350px;
    margin-top: 35px;
    span {
        font-size: 17px;
        margin-bottom: 10px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 0 15px;
    }
`;

const RubricQuestion = (props) => {
    return (
        <>
            <Question>
                <span>{props.question}</span>
                <div><p>0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p></div>
                <input id={props.id} type={"range"} min={0} max={5} step={1} defaultValue={0} />
            </Question>
        </>
    );
}

export default RubricQuestion;