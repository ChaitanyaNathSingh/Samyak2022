import styled from "styled-components";

const Record = styled.span`
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    padding: 10px 25px;
    border: 2px solid red;
    width: 50%;
    p {
        font-size: 14px;
        text-transform: uppercase;
        margin: 0;
        margin-top: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    h2 {
        font-size: 17px;
        color: #ffb521;
        /* margin-top: 6px; */
        font-weight: 600;
        letter-spacing: .6px;
        margin: 0;
        margin-bottom: 10px;
    }
`;

const RowRecord = (props) => {
    return (
        <>
            <Record>
                <p>{props.keyName}</p>
                <h2>{props.value}</h2>
            </Record>
        </>
    );
}

export default RowRecord;