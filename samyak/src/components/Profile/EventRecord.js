import styled from "styled-components";

const H6 = styled.h6`
  font-size: 2rem;
`;

const LI = styled.li`
    border: 1px solid red;
`;

const EventRecord = (props) => {
  return (
    <div>
      <LI className="list-group-item d-flex justify-content-between align-items-center flex-wrap" style={{background:'transparent',color:'white'}}>
        <H6 className="mb-0">
          {props.children}
        </H6>
        {/* <span className="text-secondary">https://bootdey.com</span> */}
      </LI>
    </div>
  );
};

export default EventRecord;
